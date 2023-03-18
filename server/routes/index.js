import { Router } from 'express';
import authRoutes from './auth.js';
import usersRoutes from './users.js';
import platformRoutes from './platform.js';
import checkAuth from '../auth/checkAuth.js';
const router = Router();

router.use('/auth', authRoutes);
router.use('/users', checkAuth, usersRoutes);
router.use('/platform', checkAuth, platformRoutes);

export default router;
