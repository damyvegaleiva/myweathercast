import "../styles/SpinnerLoader.css";

const SpinnerLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SpinnerLoader;
