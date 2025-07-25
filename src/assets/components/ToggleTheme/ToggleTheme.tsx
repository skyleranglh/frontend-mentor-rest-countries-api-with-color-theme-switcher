import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

import "./ToggleTheme.scss";

const ToggleTheme = () => {
  return (
    <button className="toggle_theme">
      <FontAwesomeIcon className="toggle_theme__icon" icon={faMoon} />
      <p className="toggle_theme__label">Dark mode</p>
    </button>
  );
};

export default ToggleTheme;
