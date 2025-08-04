import { useState, useEffect } from "react";

import type { CountriesFilterProps } from "../../../types";

import "./Dropdown.scss";

const regions = ["africa", "america", "asia", "europe", "oceania"];

const Dropdown = ({
  countries,
  setFilteredCountries,
}: CountriesFilterProps) => {
  const [selected, setSelected] = useState("Filter by Region");
  const [open, setOpen] = useState(false);

  const handleSelect = (region: string) => {
    setSelected(region);
    setOpen(false);
  };

  useEffect(() => {
    if (selected === "Filter by Region") return;

    const normalizedRegion = selected === "america" ? "americas" : selected;

    const filtered = countries.filter(
      (country) =>
        country.region.toLowerCase() === normalizedRegion.toLowerCase()
    );

    setFilteredCountries(filtered);
  }, [selected, countries, setFilteredCountries]);

  return (
    <div className="countries-filter__dropdown">
      <button
        className="countries-filter__dropdown-toggle"
        onClick={() => setOpen(!open)}
      >
        {selected}
        <span
          className={`countries-filter__dropdown-arrow ${open ? "open" : ""}`}
        />
      </button>

      {open && (
        <ul className="countries-filter__dropdown-menu">
          {regions.map((region) => (
            <li key={region}>
              <button
                className="countries-filter__dropdown-item"
                onClick={() => handleSelect(region)}
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
