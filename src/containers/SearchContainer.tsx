import Form from "../components/Form";
import OptionsList from "../components/OptionsList";
import { TOptions } from "../types/types";

type SearchContainerProps = {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  city: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: TOptions[] | null;
  handleClick: (option: TOptions) => void;
};

const SearchContainer: React.FC<SearchContainerProps> = ({
  handleFormSubmit,
  city,
  handleInputChange,
  options,
  handleClick,
}) => {
  return (
    <search className="relative mb-5 bg-white">
      <Form
        handleFormSubmit={handleFormSubmit}
        city={city}
        handleInputChange={handleInputChange}
      />

      <OptionsList options={options} handleClick={handleClick} />
    </search>
  );
};

export default SearchContainer;
