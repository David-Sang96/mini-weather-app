import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const api_key = "2f01e27c56e945e687b9110d30f325b3";
