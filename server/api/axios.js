import axios from 'axios';

export default axios.create({
  //withCredentials: true,
  baseURL: 'https://api.sportmonks.com/v3/football',
});
