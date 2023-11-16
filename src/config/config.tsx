const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const FORECAST_URL = (lat: number, lon: number) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&units=metric&appId=${ACCESS_TOKEN}`;

const GEO_URL = (city: string) =>
  `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&units=metric&appId=${ACCESS_TOKEN}`;

export { GEO_URL, FORECAST_URL };
