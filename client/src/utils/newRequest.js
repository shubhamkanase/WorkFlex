import axios from "axios";
const production = 'https://workflex.onrender.com/api';
// const localhost = 'http://localhost:8800/api'

const newRequest = axios.create({
  baseURL: production,
  withCredentials: true,
});

export default newRequest;