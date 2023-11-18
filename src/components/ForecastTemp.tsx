type ForecastTempProps = {
  temp: number;
  description: string;
  temp_max: number;
  temp_min: number;
};

const ForecastTemp: React.FC<ForecastTempProps> = ({
  temp,
  description,
  temp_max,
  temp_min,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-5xl font-semibold rounded-2xl">{temp}°</h2>
      <p className="text-base">{description || ""}</p>
      <p className="block text-base font-normal">
        H:{temp_max}° L:
        {temp_min}°
      </p>
    </div>
  );
};

export default ForecastTemp;
