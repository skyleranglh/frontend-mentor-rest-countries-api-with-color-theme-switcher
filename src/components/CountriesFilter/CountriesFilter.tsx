import type { Country } from "../../types";

import Search from "./Search";
import Dropdown from "./Dropdown";

import "./CountriesFilter.scss";

type CountriesFilterProps = {
  countries: Country[];
  setFilteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
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
