import { TOptions } from "../types/types";

type ForecastLocationProps = {
  location: TOptions | null;
};

const ForecastLocation: React.FC<ForecastLocationProps> = ({ location }) => {
  return (
    <h2 className="px-1 py-1 mt-5 max-w-[90%] text-xl text-center font-bold rounded-lg bg-white/50 backdrop-blur">
      {location?.name}
      {location?.state && ` (${location.state})`},{" "}
      <span className="font-thin"> {location?.country}</span>
    </h2>
  );
};

export default ForecastLocation;
