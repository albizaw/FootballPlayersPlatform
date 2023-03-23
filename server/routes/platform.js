import { Router } from 'express';
import {
  hello,
  allPlayers,
  addFavouritePlayer,
  deleteFavouritePlayer,
  favPlayers,
  deleteAllPlayers,
} from '../controller/platform.js';

const router = Router();

router.get('/hello', hello);
router.get('/allPlayers', allPlayers);
router.get('/favplayers', favPlayers);

router.post('/addfavouriteplayer', addFavouritePlayer);

router.delete('/deletefavouriteplayer/:cardId', deleteFavouritePlayer);
router.delete('/deleteAllplayers', deleteAllPlayers);

export default router;
