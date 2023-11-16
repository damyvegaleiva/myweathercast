import { useEffect, useState } from "react";
import { FORECAST_URL, GEO_URL } from "./config/config";
import { TForeCast, TOptions } from "./types/types";
import SearchContainer from "./containers/SearchContainer";
import Forecast from "./components/Forecast";

function App() {
  const [city, setCity] = useState<string>("");
  const [options, setOptions] = useState<TOptions[] | null>(null);
  const [location, setLocation] = useState<TOptions | null>(null);
  const [forecast, setForecast] = useState<TForeCast | null>(null);

  // ------------------ useEffect EVERY TIME LOCATION CHANGES AND NOT EMPTY ------------------//
  useEffect(() => {
    if (location) {
      fetchData(FORECAST_URL(location.lat, location.lon));
    }
  }, [location]);

  // ------------------------ FETCH DATA FOR BOTH ------------------------//
  const fetchData = async (API_URL: string): Promise<void> => {
    try {
      const req = await fetch(API_URL);
      const res = await req.json();

      API_URL.includes("/geo") ? setOptions(res) : setForecast(res);
    } catch (err) {
      console.log("The error:", err);
    }
  };

  // ------------------------ HANDLE INPUT CHANGE ------------------------//
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, " ");
    setCity(value);

    if (value === "") return setOptions([]);
  };

  // ------------------------ HANDLE FORM SUBMIT ------------------------ //
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city !== "") {
      setForecast(null);
      fetchData(GEO_URL(city));
      return;
    }
  };

  // ------------------------ SETS LOCATION TO FETCH DATA ------------------------ //
  const handleClick = (option: TOptions): void => {
    setLocation(option);
    setCity("");
    setOptions(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen m-auto app">
      <h1>MyWeatherCast</h1>

      <SearchContainer
        handleFormSubmit={handleFormSubmit}
        city={city}
        handleInputChange={handleInputChange}
        options={options}
        handleClick={handleClick}
      />

      <Forecast forecast={forecast} location={location} />
    </div>
  );
}

export default App;
