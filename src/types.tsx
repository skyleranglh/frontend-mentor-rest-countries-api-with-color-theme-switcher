export type NavbarProps = {
  title: string;
};

export type Country = {
  name: { common: string; official: string };
  region: string;
  flags: { png: string; svg: string; alt?: string };
  population: number;
  capital: string[];
  cca3: string;
};

export type CountriesFilterProps = {
  countries: Country[];
  setFilteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};

export type CountryCardProps = {
  country: Country;
};

export type CountryDetailType = {
  flags: { png: string; svg: string; alt?: string };
  name: { common: string; native: string };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: Array<string>;
  currencies: Array<string>;
  languages: Array<string>;
  borders: Array<string>;
};
