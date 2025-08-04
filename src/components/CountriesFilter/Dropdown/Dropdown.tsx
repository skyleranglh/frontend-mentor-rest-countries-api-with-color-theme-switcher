import { useState, useEffect } from "react";

import type { CountriesFilterProps } from "../../../types";

import "./Dropdown.scss";

const regions = ["africa", "america", "asia", "europe", "oceania", "reset"];

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
    if (selected === "reset") {
      setSelected("Filter by Region");
      setFilteredCountries(countries);
      return;
    }

    const normalizedRegion = selected === "america" ? "americas" : selected;

    const filtered = countries.filter(
      (country) =>
        country.region.toLowerCase() === normalizedRegion.toLowerCase()
    );

    setFilteredCountries(filtered);
  }, [selected, countries, setFilteredCountries]);

  return (
    <div className="countries_filter__dropdown">
      <button
        className="countries_filter__dropdown_toggle"
        onClick={() => setOpen(!open)}
      >
        {selected}
        <span
          className={`countries_filter__dropdown_arrow ${open ? "open" : ""}`}
        />
      </button>

      {open && (
        <ul className="countries_filter__dropdown_menu">
          {regions.map((region) => (
            <li key={region}>
              <button
                className="countries_filter__dropdown_item"
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
