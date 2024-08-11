import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    accept: 'application/json',
    Authorization: process.env.API_KEY 
  },
});

export default axiosInstance;