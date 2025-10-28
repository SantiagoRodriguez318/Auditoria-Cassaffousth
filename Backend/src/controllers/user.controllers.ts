<<<<<<< HEAD
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
=======
import {Request, Response} from 'express';
import {User} from '../entities/user';
import { error } from 'console';

export const createUser = async (req:Request, res:Response) =>{
try {
        const { Dni , firstname, lastname , email , password } = req.body;
    
    
    const user = new User();
    user.Dni = Dni;
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;
    
    const existingMail = await User.findOne({ where: [{ email }, { Dni }] });
    if (existingMail) {
        res.status(400).json({ message: 'El email o DNI ya están registrados' });
        return;
    }
    
    if (!user.lastname || !user.firstname) throw new Error
    await user.save()
    
    console.log(user);
    
    return res.json(user);

} catch (error) {
    if (error instanceof Error)
        {
        return res.status(500).json({message: 'Algo salió mal.'});
        }
    }
};

export const getUsers = async (req:Request, res:Response) => {

    try 
    {
        const users = await User.find()
        return res.json(users)
    
    } catch (error) 
    {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }    
    }
};

export const updateUser = async (req:Request, res:Response) =>{
    try {
        const {id} = req.params;
        const user = await User.findOneBy({id: parseInt(req.params.id!, 10)})


        if (!user) return res.status(404).json({message: 'El usuario no existe.'})
        await User.update({id: parseInt(id!, 10)}, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            Dni: req.body.Dni,
            email: req.body.email,
        })

        return res.sendStatus(204)
        } catch (error) 
            {
                if (error instanceof Error){
                return res.status(500).json({message: error.message})}
            }
}

export const deleteUser = async (req:Request, res:Response) =>{

    try {
            const {id} = req.params;

            const resultado = await User.delete({id: parseInt(id!, 10)});    
            if (resultado.affected === 0 ) {
                return res.status(404).json ({message: 'Usuario no encontrado, no se pudo eliminar.'})
            }
            return res.sendStatus(204);
        } 
        catch (error) {
        if (error instanceof Error){
            return res.sendStatus(500).json({message: error.message})
        }
    }
}

export const getOnlyUser = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;

        const user = await User.findOneBy({id: parseInt(id!, 10)}) 
        return res.json(user)
        } 
    catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}
>>>>>>> 9d74377cb464c7b807eadb329256f629e2bcae65
