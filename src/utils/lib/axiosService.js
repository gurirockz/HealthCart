import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosService;
