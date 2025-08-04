import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import type { CountryDetailType } from "../../types";
import { alpha3ToAlpha2 } from "../../utils/utils";

import "./CountryDetail.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft as faArrow } from "@fortawesome/free-solid-svg-icons";

const CountryDetail = () => {
  const [country, setCountry] = useState<CountryDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { cca3 } = useParams<{ cca3: string }>();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const apiUrl = "https://restcountries.com/v3.1/alpha/";
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${apiUrl}${cca3}?fields=name,region,subregion,flags,population,capital,cca3,tld,currencies,languages,borders&fullText=true`
        );
        const data = await res.json();
        console.log(data);
        setCountry(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cca3]);

  const regionNames = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  if (loading || !country || !country.name || !country.name.common || !cca3) {
    return (
      <p className={`country_detail ${loading ? "loading" : "error"}`}>
        {loading
          ? "Loading..."
          : !cca3
          ? "No country code specified."
          : !country
          ? "No country found."
          : !country.name?.common
          ? "No valid country data found."
          : "Unknown error"}
      </p>
    );
  }

  if (error) {
    return <p className="country_detail error">Error: {error}</p>;
  }

  const {
    name: { common, nativeName },
    flags: { png, alt },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  const nativeCommon = nativeName && Object.values(nativeName)[0]?.common;

  const currencyNames = currencies
    ? Object.values(currencies)
        .map((currency: { name: string }) => currency.name)
        .join(", ")
    : "N/A";

  const languageList = languages ? Object.values(languages).join(", ") : "N/A";

  return (
    <div className="country_detail">
      <button className="back-button" onClick={handleBack}>
        <FontAwesomeIcon icon={faArrow} />
        <span>Back</span>
      </button>
      <div className="country_detail__body">
        <img className="country_detail__flag" src={png} alt={alt} />

        <div className="country_detail__info">
          <h2 className="country_detail__name">{common}</h2>

          <div className="country_detail__wrapper">
            <div className="country_detail__main_info">
              <p>
                <span className="country_detail__info_label">Native Name:</span>{" "}
                {nativeCommon}
              </p>
              <p>
                <span className="country_detail__info_label">Population:</span>{" "}
                {population.toLocaleString()}
              </p>
              <p>
                <span className="country_detail__info_label">Region:</span>{" "}
                {region}
              </p>
              <p>
                <span className="country_detail__info_label">Sub Region:</span>{" "}
                {subregion}
              </p>
              <p>
                <span className="country_detail__info_label">Capital:</span>{" "}
                {capital?.[0] || "N/A"}
              </p>
            </div>

            <div className="country_detail__extra_info">
              <p>
                <span className="country_detail__info_label">
                  Top Level Domain:
                </span>{" "}
                {tld?.join(", ") || "N/A"}
              </p>
              <p>
                <span className="country_detail__info_label">Currencies:</span>{" "}
                {currencyNames}
              </p>
              <p>
                <span className="country_detail__info_label">Languages:</span>{" "}
                {languageList}
              </p>
            </div>
          </div>

          <div className="country_detail__border_countries">
            <p>
              <span className="country_detail__info_label">
                Border Countries:
              </span>
            </p>
            <div className="country_detail__border_countries_wrapper">
              {borders && borders.length > 0
                ? borders.map((border) => (
                    <Link
                      className="border_country_link"
                      key={border}
                      to={`/countries/${border}`}
                    >
                      <button className="border_country">
                        {regionNames.of(alpha3ToAlpha2[border]) || border}
                      </button>
                    </Link>
                  ))
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
