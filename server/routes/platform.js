import { Router } from 'express';
import { hello } from '../controller/platform.js';

const router = Router();

router.get('/hello', hello);

export default router;
