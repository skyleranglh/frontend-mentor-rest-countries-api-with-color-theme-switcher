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
  setCountries,
  setError,
  setLoading,
}: CountriesFilterProps) => {
  return (
    <div className="countries-filter">
      <Search
        setCountries={setCountries}
        setError={setError}
        setLoading={setLoading}
      />
      <Dropdown
        setCountries={setCountries}
        setError={setError}
        setLoading={setLoading}
      />
    </div>
  );
};

export default CountriesFilter;
