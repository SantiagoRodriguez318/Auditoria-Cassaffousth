import { UserRepository } from '../repositories/user.repository';
import { User } from "../entities/user";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../controllers/auth.controller';
import { transporter } from '../nodemailer/mailer';


export const getAllUsersService = async (): Promise<User[]> => {
    return await UserRepository.findAllUsers()
}

export const getUserByIdService = async (id: number): Promise<User> => {
    if (!User) {
        throw new Error("Usuario no encontrado.")
    }
    return await UserRepository.findById(id)
}

export const createUserService = async (data: Partial<User>): Promise<User> => {
    if (!data.Contraseña) throw new Error("PASSWORD_REQUIRED")

        const hashedPassword = await bcrypt.hash(data.Contraseña, 10)
        const newUser = await UserRepository.createUser({ 
            ...data, 
            Contraseña: hashedPassword,
            isVerified: false
        });

      // Generar token de verificación
        const verificationToken = jwt.sign(
            { id: newUser.id },
            SECRET_KEY,
            { expiresIn: "1d" } // vence en 1 día
        );

      // Enviar correo de verificación
    const verificationLink = `http://localhost:3000/verify/${verificationToken}`;

    await transporter.sendMail({
        from: '"Olimpiadas" <SantiagoMKiller123@gmail.com>',
        to: newUser.Email,
        subject: "Verificá tu cuenta",
        html: `
        <h2>Hola ${newUser.Nombre}!</h2>
        <p>Gracias por registrarte. Por favor, verificá tu cuenta haciendo clic en el siguiente enlace:</p>
        <a href="${verificationLink}">Verificar mi cuenta</a>
        <p>Este enlace expira en 24 horas.</p>
        `,
    });

    return newUser;
    };
    

export const updateUserService = async (id: number, data: Partial<User>): Promise<User> => {
    return await UserRepository.updateUser(id, data)
}

export const deleteUserService = async (id: number): Promise<void> => {
    return await UserRepository.deleteUser(id)
}
