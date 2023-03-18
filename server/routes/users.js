import { Router } from 'express';
import { getUserInfo } from '../controller/user.js';

const router = Router();
router.get('/me/info', getUserInfo);

export default router;
