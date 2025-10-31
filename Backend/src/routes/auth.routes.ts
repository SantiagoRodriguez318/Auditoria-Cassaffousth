import { Router } from 'express';
import { Login} from '../controllers/auth.controller';
import { verifyEmail } from '../controllers/auth.controller';
import { validateEmail } from '../middlewares/user.middleware';


const router = Router();

router.get("/verify/:token", verifyEmail);
router.post('/auth/login', validateEmail, Login);

export default router

