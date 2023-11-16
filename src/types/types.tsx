export type TOptions = {
  name: string;
  local_names?: {
    [key: string]: string;
  };
  lat: number;
  lon: number;
  country: string;
  state?: string;
};

export type TForeCast = {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: [
    {
      clouds: {
        all: number;
      };
      dt: number;
      dt_text: string;
      main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
      };
      pop: number;
      sys: {
        pod: string;
      };
      visibility: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
    }
  ];
  message: string;
};
