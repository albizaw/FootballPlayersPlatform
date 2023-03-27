import axios from 'axios';

export default axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
});

// export const api = axios.create({
//   baseURL: API.BASE_URL,
// });
//baseURL: 'http://localhost:8000',
