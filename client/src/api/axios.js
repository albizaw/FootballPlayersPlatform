import axios from 'axios';

export default axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// export const api = axios.create({
//   baseURL: API.BASE_URL,
// });
