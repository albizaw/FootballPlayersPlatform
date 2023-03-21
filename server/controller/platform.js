import axios from '../api/axios.js';
import ENV from '../config.js';

export const hello = (req, res) => {
  res.json('Hello ');
};

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
