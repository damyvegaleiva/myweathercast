import ForecastDegreeOption from "../components/ForecastDegreeOption";

type ForecastDegreeOptionProps = {
  setDegree: React.Dispatch<React.SetStateAction<string>>;
  degree: string;
};

const ForecastDegreeOptionContainer: React.FC<ForecastDegreeOptionProps> = ({
  degree,
  setDegree,
}) => {
  return (
    <p className="absolute text-white/75 top-0 right-2 text-[1rem] hover:cursor-default ">
      <ForecastDegreeOption
        degree={degree}
        setDegree={setDegree}
        value={"°C"}
      />
      {""} / {""}
      <ForecastDegreeOption
        degree={degree}
        setDegree={setDegree}
        value={"°F"}
      />
    </p>
  );
};

export default ForecastDegreeOptionContainer;
