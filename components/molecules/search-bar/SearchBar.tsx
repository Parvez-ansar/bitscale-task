import SearchIcon from "@/components/atoms/icons/SearchIcon";
import React from "react";

interface SearchBarProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className"
> {
  wrapperClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
  icon?: React.ReactNode;
}

const SearchBar = ({
  wrapperClassName = "",
  inputClassName = "",
  iconClassName = "",
  icon,
  placeholder = "Search...",
  ...inputProps
}: SearchBarProps) => {
  return (
    <div
      className={`flex items-center bg-subtle rounded-lg ${wrapperClassName}`}>
      {icon ?? <SearchIcon className={`m-2.5 ${iconClassName}`} />}

      <input
        {...inputProps}
        placeholder={placeholder}
        className={`grow outline-none text-sm placeholder:text-sm ${inputClassName}`}
      />
    </div>
  );
};

export default SearchBar;
