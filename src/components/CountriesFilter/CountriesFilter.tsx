import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { Country } from "../../types";

import Search from "./Search";
import Dropdown from "./Dropdown";

import "./CountriesFilter.scss";

type CountriesFilterProps = {
  setCountries: Dispatch<SetStateAction<Country[]>>;
  setError: Dispatch<SetStateAction<string | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const CountriesFilter = ({
  countries,
  setFilteredCountries,
}: CountriesFilterProps) => {
  return (
    <div className="countries-filter">
      <Search
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
      <Dropdown
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
    </div>
  );
};

export default CountriesFilter;
