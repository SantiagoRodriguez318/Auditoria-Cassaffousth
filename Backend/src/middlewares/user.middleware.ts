import { Request, Response, NextFunction } from 'express';

export const validateEmail = (req: Request, res: Response, next: NextFunction) => {
    const { Email } = req.body;

    if (!Email) {
        return res.status(400).json({ message: 'El email es requerido' });
    }

    if (!Email.includes('@')) {
        return res.status(400).json({ message: 'El email debe contener un @' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
    if (!emailRegex.test(Email)) {
        return res.status(400).json({ message: 'El formato del email no es válido' });
    }

    next();
};


