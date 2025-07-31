import type { CountryCardProps } from "../../types";

import "./CountryCard.scss";

const CountryCard = ({ country }: CountryCardProps) => {
  const { flags, name, population, region, capital } = country;
  const { png, alt } = flags;

  return (
    <div className="country_card">
      <img className="country_card__image" src={png} alt={alt} />
      <div className="country_card__body">
        <h2 className="country_card__title">{name.common}</h2>
        <div className="country_card__labels">
          <p>
            <span className="country_card__label">Population:</span>{" "}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="country_card__label">Region:</span> {region}
          </p>
          <p>
            <span className="country_card__label">Capital: </span> {capital[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
