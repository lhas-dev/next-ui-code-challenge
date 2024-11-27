import { Input } from "@nextui-org/input";
import { ChangeEvent, useEffect, useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}
const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    onSearch(value);
  }, [value]);

  return (
    <Input
      className="mb-2"
      label="Search by name, address or city"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
