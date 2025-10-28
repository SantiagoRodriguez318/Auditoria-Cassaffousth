import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../controllers/auth.controller';

export function VerifyToken(req: Request, res: Response, next: () => void) {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado.' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.body.user = decoded;
        console.log(req.body.user);
        return next();
    } 
    catch (error) {
        console.log("Error al verificar el token:", error);
        return res.status(401).json({ message: "Token inválido." });
    }
}

console.log('SECRET_KEY en controller:', SECRET_KEY);
console.log('SECRET_KEY en middleware:', SECRET_KEY);
