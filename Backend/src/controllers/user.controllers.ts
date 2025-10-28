import { Request, Response } from "express";
import { 
    getAllUsersService,
    getUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService
} from "../services/user.services";

export const crearUsuario = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body);
        return res.status(201).json(user);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
    };

export const consultarUsuarios = async (_req: Request, res: Response) => {
    try {
        const users = await getAllUsersService();
        return res.json(users);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const consultarUsuario = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id!, 10);
        const User = await getUserByIdService(id);
        console.log("Un administrador a solicitado a:", User);
        return res.status(200).json(User);
    } catch (error: any) {
        return res.status(404).json({ message: error.message });
    }
};


export const actualizarUsuario = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id!, 10);
        const updatedUser = await updateUserService(id, req.body);
        return res.json(updatedUser);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
};

export const borrarUsuario = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id!, 10);
        await deleteUserService(id);
        return res.json({ message: "El usuario ha sido eliminado correctamente." });
    } catch (error: any) {
        return res.status(404).json({ message: error.message });
    }
};