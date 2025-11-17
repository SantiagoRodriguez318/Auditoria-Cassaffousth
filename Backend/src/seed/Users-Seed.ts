import { AppDataSource } from "../Config-BD/db";
import { User } from "../entities/user";
import bcrypt from 'bcryptjs';

    export const seedUsers = async () => {
        const userRepository = AppDataSource.getRepository(User);

        const existing = await userRepository.find();
        if (existing.length > 0) {
            console.log("Usuarios ya cargados, se salta el seed.");
            return;
        }

        const users = [
            userRepository.create({
                Nombre: "Santiago Joaquin",
                Apellido: "Rodriguez",
                Email: "SantiagoRodriguez1402@outlook.com",
                Contraseña: await bcrypt.hash("Santi0906_RTALLERES", 10),
                isVerified: true,
                Rol: "Admin",
            }),
            userRepository.create({
                Nombre: "Fabrizio Mateo",
                Apellido: "Bredanini",
                Email: "FabriBreda2007@gmail.com",
                Contraseña: await bcrypt.hash("Fabri2007Lola2005", 10),
                isVerified: true,
                Rol: "Admin",
            }),
            userRepository.create({
                Nombre: "Agustin Santiago",
                Apellido: "Bazzano",
                Email: "Pekiness_Talleres06@gmail.com",
                Contraseña: await bcrypt.hash("PekiGlaG2006", 10),
                isVerified: true,
                Rol: "Usuario",
            }),
            userRepository.create({
                Nombre: "Lautaro Daniel",
                Apellido: "Supichiatti",
                Email: "lsupichiatti@gmail.com",
                Contraseña: await bcrypt.hash("LautiTalleres_06", 10),
                isVerified: true,
                Rol: "Usuario",
            }),
            userRepository.create({
                Nombre: "Josemir Ariel",
                Apellido: "Diaz Pucheta",
                Email: "JosemirCAB2006@gmail.com",
                Contraseña: await bcrypt.hash("Pirata2006_Grande", 10),
                isVerified: true,
                Rol: "Usuario",
            }),
        ];

    await userRepository.save(users);
    console.log("Usuarios iniciales cargados ✅");
    };