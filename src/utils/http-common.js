import axios from "axios";

export const HTTP_TEAMS = axios.create({
  baseURL: "http://localhost:8083/teams?size=32"
});

export const HTTP_GAME = axios.create({
  baseURL: "http://localhost:8082/games"
});

export const HTTP_SEASONS = axios.create({
  baseURL: "http://localhost:8082/seasons"
});
