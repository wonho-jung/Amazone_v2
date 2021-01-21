import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-payment-5ab75.cloudfunctions.net/api",
});

export default instance;
