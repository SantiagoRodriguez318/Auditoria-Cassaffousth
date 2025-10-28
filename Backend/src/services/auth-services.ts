import bcrypt from 'bcryptjs';
import { User } from '../entities/user';
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();


class AuthService 
{    
    static registerUser= async (
            Dni: number,
            firstname: string,
            lastname: string,
            email: string,
            password: string,
        ) => {
            const hashedPassword= await bcrypt.hash(password, 10);
            const user= await prisma.user.create({
                data: {
                    Dni,
                    firstname,
                    lastname,
                    email,
                    password: hashedPassword
                },
            });
            return user;
            };
        static finduserbyid = async (id: number) => {
            return prisma.user.findUnique({
                where: { id: id},
            });
        }
        static findUserByEmail = async (email: string) => {
            return prisma.user.findUnique({
                where: { email: email },
            });
        }

}

export default AuthService;