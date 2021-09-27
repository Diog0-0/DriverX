import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.23.160.1:8000',
});

export default api;
