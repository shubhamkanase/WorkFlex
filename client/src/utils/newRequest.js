import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://workflex.onrender.com/api",
  withCredentials: true,
});

export default newRequest;