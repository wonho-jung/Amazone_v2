import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/v2-cb8fa/us-central1/api",
});

export default instance;
