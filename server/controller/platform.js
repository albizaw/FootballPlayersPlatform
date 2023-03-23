import axios from '../api/axios.js';
import Card from '../model/Card.model.js';
import ENV from '../config.js';

//test request
export const hello = (req, res) => {
  res.json('Hello ');
};

//endpoints for
export const allPlayers = async (req, res) => {
  try {
    axios
      .get(`/players?api_token=${ENV.API_KEY}`)
      .then((response) => {
        console.log('Hello from allPlayers');
        const data = response.data.data;
        return res.status(201).json({ data });
      })
      .catch((err) => {
        return res.status(500).json({ err });
      });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const addFavouritePlayer = async (req, res) => {
  try {
    const newCard = new Card({
      id: req.body.id,
      common_name: req.body.common_name,
      date_of_birth: req.body.date_of_birth,
      image_path: req.body.image_path,
      weight: req.body.weight,
      height: req.body.height,
      user: req.user.id,
    });

    const savedPlayer = await newCard.save();
    return res.status(201).json(savedPlayer);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteFavouritePlayer = async (req, res) => {
  try {
    const player = await Card.findById(req.params.cardId).exec();
    if (player.user === req.user.id) {
      return res.status(500).json({ message: "It's not your card!" });
    }

    await Card.findByIdAndDelete(req.params.cardId);
    return res.status(201).json('Player was deleted from favourites');
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const favPlayers = async (req, res) => {
  //res.json('Hello');

  try {
    console.log('tutaj');
    const players = await Card.find({ user: req.user.id });

    if (players) {
      return res.status(201).json(players);
    } else {
      return res.status(500).json({ message: 'No players' });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteAllPlayers = async (req, res) => {
  try {
    const players = await Card.find({ user: req.user.id });
    if (players) {
      await Card.deleteMany({ user: req.user.id });
      return res.status(201).json({ message: 'All players deleted' });
    } else {
      return res.status(500).json('Noting to delete');
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};
