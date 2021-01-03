import axios from "axios";

let api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  proxy: false
});

export default api;
