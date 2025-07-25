import { useEffect, useState } from "react";

import CountryCard from "../CountryCard";

import "./Countries.scss";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "https://restcountries.com/v3.1/all";
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${apiUrl}?fields=name,region,flags,population,capital`
        );
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
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
      {countries.map((country) => (
        <CountryCard country={country} />
      ))}
    </div>
  );
};

export default Countries;
