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
    <div className="px-3 py-5 rounded-lg bg-white/10 backdrop-blur ">
      <p className="flex flex-row mb-1 text-sm">
        <img src={icon} alt={alt} className="inline-block w-4" />
        {text}
      </p>
      <p className="text-base">{value}</p>
    </div>
  );
};

export default ForecastExtras;
