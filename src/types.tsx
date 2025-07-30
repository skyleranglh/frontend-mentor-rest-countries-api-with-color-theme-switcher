import type { Dispatch, SetStateAction } from "react";

export type NavbarProps = {
  title: string;
};

export type Country = {
  name: { common: string };
  region: string;
  flags: { png: string; svg: string; alt?: string };
  population: number;
  capital: string[];
  cca3: string;
};

export type CountriesFilterProps = {
  countries: Country[];
  setCountries: Dispatch<SetStateAction<Country[]>>;
  setFilteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  setError: Dispatch<SetStateAction<string | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
