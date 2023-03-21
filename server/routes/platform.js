import { Router } from 'express';
import { hello, allPlayers } from '../controller/platform.js';

const router = Router();

router.get('/hello', hello);
router.get('/allPlayers', allPlayers);

export default router;
