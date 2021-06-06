import axios from "axios";
var url = "https://api.github.com/users/";

const api = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
});

export default api;
