import AuthService from "../services/auth-services";
import { Request, Response } from "express";

class AuthController
{
    
    static registrarse = async (req: Request, res: Response) => {
        try {
            const { Dni, firstname, lastname, email, password } = req.body;
            
            const existingUser = await AuthService.findUserByEmail(email);
            if (existingUser) return res.status(400).json({ message: 'El usuario ya ha sido registrado' });

            const user = await AuthService.registerUser( Dni, firstname, lastname, email, password);
            return res.status(201).json(user);
        } 
        catch (error) 
        {
            res.status(400).json({ message: 'registro fallido', error });
        }


    }

}

export default AuthController;
