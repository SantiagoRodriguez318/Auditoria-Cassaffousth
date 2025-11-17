import { Request, Response } from 'express';
import { User } from '../entities/user';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const SECRET_KEY = process.env.SECRET_KEY;

export const verifyEmail = async (req: Request, res: Response) => {
    try {
        const token = req.params.token;
            if (!token) {
                return res.status(400).json({ message: "Falta el token de verificación" });
            }
        let decoded: any;
        try {
            decoded = jwt.verify(token, SECRET_KEY as string);
        } catch {
            return res.status(400).json({ message: "Token inválido o expirado" });
        }
        
        const user = await User.findOne({ where: { id: decoded.id } });
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

        user.isVerified = true;
        await user.save();

        return res.redirect('http://localhost:3000/AccountVerified.html');
    } catch (error: any) {
        return res.status(400).json({ message: "Token inválido o expirado" });
    }
};

export const Login = async (req: Request, res: Response) => {
    try {
        const { Email, Contraseña } = req.body;


        // Buscar el usuario por email
        const user = await User.findOne({ where: { Email } });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        
        // Verificar la contraseña
        const VerificarContraseña = await bcrypt.compare(Contraseña, user.Contraseña);
        if (!VerificarContraseña) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        
        if (!user.isVerified) {
            return res.status(403).json({ message: "Por favor, verificá tu cuenta antes de iniciar sesión." });
        }
        
        // Generando el token JWT
        const token = jwt.sign(
        { userId: user.id },
        SECRET_KEY as Secret,
        { expiresIn: '1h' }  // El token expirará en 1 hora
        );
        console.log('Token generado:', token)
        return res.json({ token });


    } catch (error) { 
        console.error("❌ Error en Login:", error);

        if (error instanceof Error) {
            return res.status(500).json({ message: 'Error del servidor' });
        }
    }
};