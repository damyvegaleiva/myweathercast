import { useState } from "react";
import { TForeCast, TOptions } from "../types/types";

type ForecastProps = {
  forecast: TForeCast | null;
  location: TOptions | null;
};

const Forecast: React.FC<ForecastProps> = ({ forecast, location }) => {
  const [degree, setDegree] = useState<string>("C");
  const today = forecast?.list[0];

  const temperatureConverter = (temp: number): number => {
    return degree === "C"
      ? Math.round(temp)
      : Math.round(Math.round(temp) * 1.8 + 32);
  };

  const firstLetterUppercase = (word: string) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <>
      {forecast && (
        <div className="relative flex flex-col items-center justify-center w-11/12 md:w-[400px] gap-3 py-6 border-2 rounded-lg bg-blur-bg backdrop-blur">
          <p className="absolute text-white/75 top-0 right-2 text-[1rem] hover:cursor-default ">
            <span
              className={`text-black hover:cursor-pointer ${
                degree !== "C" && "opacity-20"
              }`}
              onClick={() => setDegree("C")}
            >
              °C
            </span>{" "}
            /{" "}
            <span
              className={`text-black hover:cursor-pointer ${
                degree !== "F" && "opacity-20"
              }`}
              onClick={() => setDegree("F")}
            >
              °F
            </span>
          </p>

          <h2 className="px-5 py-1 mt-5 text-2xl font-bold rounded-lg bg-white/50 backdrop-blur">
            {location?.name}
            {location?.state && ` (${location.state})`},{" "}
            <span className="font-thin"> {location?.country}</span>
          </h2>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-semibold rounded-2xl ">
              {temperatureConverter(today?.main.temp || 0)}°
            </h2>
            <p className="text-[.75rem]">
              {firstLetterUppercase(today?.weather[0].description || "")}
            </p>
            <p className="block text-[.70rem] font-normal">
              H:{temperatureConverter(today?.main.temp_max || 0)}° L:
              {temperatureConverter(today?.main.temp_min || 0)}°
            </p>
          </div>

          <img
            src={`/icons/${today?.weather[0].icon}.png
        `}
            alt=""
            className="w-1/4"
          />

          <div className="flex flex-row justify-center gap-2">
            <div className="p-3 rounded-lg bg-white/10 backdrop-blur border-[1px] border-gray-500">
              <p className="flex flex-row text-[.6rem]">
                <img
                  src="./icons/feels-like.png"
                  alt="thermometer icon"
                  className="inline-block w-4"
                />
                FEELS LIKE
              </p>
              <p className="text-sm">
                {temperatureConverter(today?.main.feels_like || 0)}°
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white/10 backdrop-blur border-[1px] border-gray-500">
              <p className="flex flex-row text-[.6rem]">
                <img
                  src="./icons/humidity.png"
                  alt="thermometer icon"
                  className="inline-block w-4"
                />
                HUMIDITY
              </p>
              <p className="text-sm">{today?.main.humidity}%</p>
            </div>

            <div></div>
          </div>

          {/* ------------------------HOURLY FORECAST------------------------ */}
          <div className="flex flex-row items-center justify-center">
            {forecast?.list.map((item, index) => (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <p className="text-sm">
                  {index !== 0 &&
                    new Date(item.dt * 1000).getHours() < 10 &&
                    "0"}
                  {index === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
                </p>
                <img
                  src={`./icons/${item.weather[0].icon}.png`}
                  alt={`Weather icon for ${item.weather[0].description}`}
                  className="w-[50px]"
                />
                <p className="text-sm">
                  {temperatureConverter(Math.round(item.main.temp))}°
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Forecast;
