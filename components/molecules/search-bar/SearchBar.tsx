import SearchIcon from "@/components/atoms/icons/SearchIcon";
import React from "react";

interface SearchBarProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  wrapperClassName?: string;
}

const SearchBar = ({ onChange, value, wrapperClassName }: SearchBarProps) => {
  return (
    <div
      className={`flex items-center bg-subtle rounded-lg ${wrapperClassName}`}>
      <SearchIcon className="text-helper m-2.5" />
      <input
        className="placeholder:text-sm placeholder:text-helper text-sm outline-0 grow"
        placeholder="Search grids and workbooks..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
