type ForecastIconProps = {
  iconValue: string | undefined;
};

const ForecastIcon: React.FC<ForecastIconProps> = ({ iconValue }) => {
  return (
    <img
      src={`/icons/${iconValue}.png
`}
      alt=""
      className="w-1/4"
    />
  );
};

export default ForecastIcon;
