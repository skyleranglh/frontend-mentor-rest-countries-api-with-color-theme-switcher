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
  name: {
    common: string;
    nativeName: {
      [langCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  region: string;
  subregion: string;
  flags: {
    png: string;
    alt: string;
  };
  population: number;
  capital: string[];
  cca3: string;
  tld: string[];
  currencies: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [langCode: string]: string;
  };
  borders: string[];
};
