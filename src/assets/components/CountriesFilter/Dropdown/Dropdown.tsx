import { useState, useEffect } from "react";

import type { CountriesFilterProps } from "../../../../types";

import "./Dropdown.scss";

const regions = ["africa", "america", "asia", "europe", "oceania"];

const Dropdown = ({
  setCountries,
  setError,
  setLoading,
}: CountriesFilterProps) => {
  const [selected, setSelected] = useState("Filter by Region");
  const [open, setOpen] = useState(false);

  const handleSelect = (region: string) => {
    setSelected(region);
    setOpen(false);
  };

  useEffect(() => {
    if (!selected || selected === "Filter by Region") return;

    const fetchData = async () => {
      const apiUrl = "https://restcountries.com/v3.1/region/";
      try {
        const res = await fetch(
          `${apiUrl}${selected}?fields=name,region,flags,population,capital,cca3`
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

    fetchData();
  }, [selected, setCountries, setError, setLoading]);

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
            <li
              key={region}
              className="countries-filter__dropdown-item"
              onClick={() => handleSelect(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
