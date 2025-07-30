import { useState } from "react";
import type { CountriesFilterProps } from "../../../types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Search.scss";

const Search = ({ countries, setFilteredCountries }: CountriesFilterProps) => {
  const [value, setValue] = useState("");

  const normalize = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  const handleSearch = () => {
    if (value === "") {
      setFilteredCountries(countries);
      return;
    }

    const term = normalize(value.trim());

    const result = countries.filter((country) => {
      const nameCommon = normalize(country.name.common);
      const nameOfficial = normalize(country.name.official);
      return nameCommon.includes(term) || nameOfficial.includes(term);
    });

    setFilteredCountries(result);
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <div className="countries_filter__search">
      <FontAwesomeIcon icon={faSearch} className="search-box__icon" />
      <input
        type="text"
        className="countries-filter__search-input"
        placeholder="Search for a country..."
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeydown}
      />
    </div>
  );
};

export default Search;
