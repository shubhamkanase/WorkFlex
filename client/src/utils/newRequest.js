import axios from "axios";

const newRequest = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:8800/api/",
=======
  baseURL: "http://localhost:8800/api",
>>>>>>> 494744736fccee31f0401ce2d804d18c4b4e1da7
  withCredentials: true,
});

export default newRequest;