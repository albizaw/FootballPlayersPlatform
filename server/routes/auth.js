import { Router } from 'express';
import { register, login, logout, isLogIn } from '../controller/auth.js';

const router = Router();
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/islogin', isLogIn);

export default router;
