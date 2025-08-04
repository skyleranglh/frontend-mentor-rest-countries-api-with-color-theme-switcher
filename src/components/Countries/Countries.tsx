import { useEffect, useState } from "react";

import type { Country } from "../../types";

import CountryCard from "../CountryCard";
import CountriesFilter from "../CountriesFilter";

import "./Countries.scss";

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = "https://restcountries.com/v3.1/all";
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${apiUrl}?fields=name,region,flags,population,capital,cca3`
        );
        const data = await res.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="countries loading">Loading...</p>;
  if (error) return <p className="countries error">Error: {error}</p>;

  return (
    <div className="countries">
      <CountriesFilter
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />

      <div
        className={`countries__list${
          filteredCountries.length === 0 ? " countries__list--empty" : ""
        }`}
      >
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))
        ) : (
          <h2 className="countries__not_found">NO RESULTS FOUND</h2>
        )}
      </div>
    </div>
  );
};

export default Countries;
