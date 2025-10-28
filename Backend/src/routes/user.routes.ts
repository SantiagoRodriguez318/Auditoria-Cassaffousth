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
