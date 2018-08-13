import axios from "axios";

export const HTTP_TEAMS = axios.create({
  baseURL: "http://localhost:3000/teams"
});

export const HTTP_GAME = axios.create({
  baseURL: "http://localhost:8082/games"
});

export const HTTP_SEASONS = axios.create({
  baseURL: "http://localhost:8082/seasons"
});
