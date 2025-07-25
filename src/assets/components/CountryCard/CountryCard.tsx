import "./CountryCard.scss";

const CountryCard = (props) => {
  const { flags, name, population, region, capital } = props.country;
  const { png, alt } = flags;

  return (
    <div className="country_card">
      <img className="country_card__image" src={png} alt={alt} />
      <div className="country_card__body">
        <h2 className="country_card__title">{name.common}</h2>
        <div className="country_card__labels">
          <p>
            <span className="country_card__label">Population:</span> {population}
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
