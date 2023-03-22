import { Router } from 'express';
import {
  hello,
  allPlayers,
  addFavouritePlayer,
  deleteFavouritePlayer,
} from '../controller/platform.js';

const router = Router();

router.get('/hello', hello);
router.get('/allPlayers', allPlayers);
router.post('/addfavouriteplayer', addFavouritePlayer);
router.delete('/deletefavouriteplayer/:cardId', deleteFavouritePlayer);

export default router;
