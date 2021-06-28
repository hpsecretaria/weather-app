export type Summary = {
  title: String;
  description: String;
  icon: String;
};

export type Temperature = {
  actual: number;
  feelsLike: number;
  min: number;
  max: number;
};

export type Wind = {
  speed: number;
  deg: number;
};

export type Clouds = {
  all: number;
  visibility: number;
  humidity: number;
};

export type Weather = {
  summary: Summary;
  temperature: Temperature;
  wind: Wind;
  clouds: Clouds;
  timestamp: number;
};
