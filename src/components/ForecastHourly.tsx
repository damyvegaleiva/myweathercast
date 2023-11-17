import { TForeCast } from "../types/types";

type ForecastHourlyProps = {
  temperatureConverter: (temp: number) => number;
  forecast: TForeCast | null;
};

const ForecastHourly: React.FC<ForecastHourlyProps> = ({
  forecast,
  temperatureConverter,
}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-4">
      {forecast?.list.map((item, index) => (
        <div className="flex flex-col items-center justify-center" key={index}>
          <p className="text-sm">
            {index !== 0 && new Date(item.dt * 1000).getHours() < 10 && "0"}
            {index === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
          </p>
          <img
            src={`./icons/${item.weather[0].icon}.png`}
            alt={`Weather icon for ${item.weather[0].description}`}
            className="w-[30px]"
          />
          <p className="text-sm">
            {temperatureConverter(Math.round(item.main.temp))}°
          </p>
        </div>
      ))}
    </div>
  );
};

export default ForecastHourly;
