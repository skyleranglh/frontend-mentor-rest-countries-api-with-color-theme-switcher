import { useState } from "react";
import type { CountriesFilterProps } from "../../../../types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Search.scss";

const Search = ({
  setCountries,
  setError,
  setLoading,
}: CountriesFilterProps) => {
  const [value, setValue] = useState("");

  const fetchData = async () => {
    const apiUrl = "https://restcountries.com/v3.1/name/";
    try {
      const res = await fetch(
        `${apiUrl}${value}?fields=name,region,flags,population,capital,cca3`
      );
      const data = await res.json();
      setCountries(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") fetchData();
  };

  return (
    <div className="countries_filter__search">
      <FontAwesomeIcon icon={faSearch} className="search-box__icon" />
      <input
        type="text"
        className="countries-filter-input"
        placeholder="Search for a country..."
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeydown}
      />
    </div>
  );
};

export default Search;
