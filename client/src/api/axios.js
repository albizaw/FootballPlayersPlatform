import axios from 'axios';
import API from './apidata.js';

export default axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000',
});

// export const api = axios.create({
//   baseURL: API.BASE_URL,
// });
