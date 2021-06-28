import { Weather } from "./weather";

export type City = {
  name: string;
  country: string;
  coord: Coordinates;
  weather: Weather;
};

export type Coordinates = {
  lon: number;
  lat: number;
};
