type ForecastExtrasProps = {
  text: string;
  value: number | string;
  alt: string;
  icon: string;
};

const ForecastExtras: React.FC<ForecastExtrasProps> = ({
  text,
  value,
  icon,
  alt,
}) => {
  return (
    <div className="p-3 rounded-lg bg-white/10 backdrop-blur border-[1px] border-gray-500">
      <p className="flex flex-row text-[.6rem]">
        <img src={icon} alt={alt} className="inline-block w-4" />
        {text}
      </p>
      <p className="text-sm">{value}</p>
    </div>
  );
};

export default ForecastExtras;
