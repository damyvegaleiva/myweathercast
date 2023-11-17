import { TOptions } from "../types/types";

type OptionsListProps = {
  options: TOptions[] | null;
  handleClick: (option: TOptions) => void;
};

const OptionsList: React.FC<OptionsListProps> = ({ options, handleClick }) => {
  return (
    <ul
      className={`absolute w-full bg-white border-2 -bottom-100 ${
        options !== null ? "block" : "hidden"
      }`}
    >
      {options?.length === 0 ? (
        <li>No results found.</li>
      ) : (
        options?.map((option, index) => (
          <li
            key={index}
            className="hover:cursor-pointer hover:bg-black hover:text-white"
            onClick={() => handleClick(option)}
          >
            {option.name} {option.state ? `(${option.state})` : ""},{" "}
            {option.country}
          </li>
        ))
      )}
    </ul>
  );
};

export default OptionsList;
