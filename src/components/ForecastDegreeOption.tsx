type ForecastDegreeOptionProps = {
  setDegree: React.Dispatch<React.SetStateAction<string>>;
  degree: string;
  value: string;
};

const ForecastDegreeOption: React.FC<ForecastDegreeOptionProps> = ({
  degree,
  setDegree,
  value,
}) => {
  return (
    <span
      className={`text-black hover:cursor-pointer ${
        degree !== value && "opacity-20"
      }`}
      onClick={() => setDegree(value)}
    >
      {value}
    </span>
  );
};

export default ForecastDegreeOption;
