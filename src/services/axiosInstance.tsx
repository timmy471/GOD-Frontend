import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_VARIABLE;

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
