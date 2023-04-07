import axios from 'axios';

// const baseURL = process.env.NEXT_PUBLIC_API_VARIABLE;
const baseURL = 'http://localhost:9002/api/';

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
