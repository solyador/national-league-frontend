import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://localhost:8083/teams?size=32"
});
