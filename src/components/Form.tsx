type FormProps = {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  city: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form: React.FC<FormProps> = ({
  handleFormSubmit,
  city,
  handleInputChange,
}) => {
  // --------------------------------------------------------------//
  return (
    <form
      action=""
      onSubmit={handleFormSubmit}
      className="bg-white border-2 border-black"
    >
      <input
        className="px-3 focus:outline-none"
        autoComplete="off"
        type="search"
        name="search"
        value={city}
        placeholder="City..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e)
        }
      />
      <button className="p-2 text-white bg-black">Search</button>
    </form>
  );
};

export default Form;
