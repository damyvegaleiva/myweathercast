import Form from "../components/Form";
import OptionsList from "../components/OptionsList";
import SpinnerLoader from "../components/SpinnerLoader";
import { TOptions } from "../types/types";

type SearchContainerProps = {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  city: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: TOptions[] | null;
  handleClick: (option: TOptions) => void;
  isLoading: boolean;
};

const SearchContainer: React.FC<SearchContainerProps> = ({
  handleFormSubmit,
  city,
  handleInputChange,
  options,
  handleClick,
  isLoading,
}) => {
  return (
    <header>
      <search className="relative mb-5 bg-white">
        <Form
          handleFormSubmit={handleFormSubmit}
          city={city}
          handleInputChange={handleInputChange}
        />

        {isLoading && options ? (
          <SpinnerLoader />
        ) : (
          <OptionsList options={options} handleClick={handleClick} />
        )}
      </search>
    </header>
  );
};

export default SearchContainer;
