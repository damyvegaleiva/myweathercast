import { useState } from "react";
import { TForeCast, TOptions } from "../types/types";
import ForecastDegreeOptionContainer from "./ForecastDegreeOptionContainer";
import ForecastLocation from "../components/ForecastLocation";
import ForecastIcon from "../components/ForecastIcon";
import ForecastExtras from "../components/ForecastExtras";
import ForecastTemp from "../components/ForecastTemp";
import ForecastHourly from "../components/ForecastHourly";

type ForecastProps = {
  forecast: TForeCast | null;
  location: TOptions | null;
};

const Forecast: React.FC<ForecastProps> = ({ forecast, location }) => {
  const [degree, setDegree] = useState<string>("°C");
  const today = forecast?.list[0];

  // -----------------------------------TEMPERATURE CONVERTER //
  const temperatureConverter = (temp: number): number => {
    return degree === "°C"
      ? Math.round(temp)
      : Math.round(Math.round(temp) * 1.8 + 32);
  };

  // -----------------------------------FIRST LETTER UPPERCASE FUNCTION //
  const firstLetterUppercase = (word: string) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <>
      {forecast && (
        <main className="relative flex flex-col items-center justify-center mx-2 max-w-[400px] py-6 border-2 gap-4 rounded-lg bg-[#6882a670] backdrop-blur">
          <ForecastDegreeOptionContainer
            degree={degree}
            setDegree={setDegree}
          />

          <ForecastLocation location={location} />

          <ForecastIcon iconValue={today?.weather[0].icon} />

          <ForecastTemp
            temp={temperatureConverter(today?.main.temp || 0)}
            description={firstLetterUppercase(
              today?.weather[0].description || ""
            )}
            temp_max={temperatureConverter(today?.main.temp_max || 0)}
            temp_min={temperatureConverter(today?.main.temp_min || 0)}
          />

          <div className="flex flex-row justify-center gap-5">
            <ForecastExtras
              text={"FEELS LIKE"}
              alt={"Thermometer icon"}
              icon={"./icons/feels-like.png"}
              value={temperatureConverter(today?.main.feels_like || 0) + "°"}
            />

            <ForecastExtras
              text={"HUMIDITY"}
              alt={"Humidity icon"}
              icon={"./icons/humidity.png"}
              value={today?.main.humidity + "%"}
            />
          </div>

          {/* ------------------------HOURLY FORECAST------------------------ */}

          <ForecastHourly
            forecast={forecast}
            temperatureConverter={temperatureConverter}
          />
        </main>
      )}
    </>
  );
};

export default Forecast;
