<<<<<<< HEAD
import { Router } from 'express';
import { validateEmail , validatePhone } from '../middlewares/user.middleware';
import { crearUsuario , consultarUsuarios , consultarUsuario , actualizarUsuario , borrarUsuario } from '../controllers/user.controllers'
import { VerifyToken } from '../middlewares/auth.middleware';

const router = Router()

router.post('/registro', validateEmail, validatePhone, crearUsuario);

router.get('/users', consultarUsuarios);

router.get('/users/:id',  VerifyToken, consultarUsuario);

router.put('/users/:id',VerifyToken, validateEmail, validatePhone, actualizarUsuario);

router.delete('/users/:id', borrarUsuario);

export default router
=======
import {Router} from 'express';
import { createUser , deleteUser, getUser, getUsers , updateUser } from '../controllers/user.controllers'
//import { rolmiddleware } from '../middleware/rol.middleware';
const router = Router()

router.post('/users', createUser);

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router
>>>>>>> 9d74377cb464c7b807eadb329256f629e2bcae65
