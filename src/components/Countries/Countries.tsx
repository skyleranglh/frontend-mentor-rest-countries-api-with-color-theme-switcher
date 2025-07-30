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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="countries">
      <CountriesFilter
        countries={countries}
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
      />

      <div className="countries__list">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
