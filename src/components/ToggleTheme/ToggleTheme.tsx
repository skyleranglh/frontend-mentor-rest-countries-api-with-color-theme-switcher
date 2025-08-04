import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";

import "./ToggleTheme.scss";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    document.body.classList.add("disable-transitions");

    toggleTheme();

    setTimeout(() => {
      document.body.classList.remove("disable-transitions");
    }, 0);
  };

  return (
    <button onClick={handleToggleTheme} className="toggle_theme">
      <FontAwesomeIcon
        className="toggle_theme__icon"
        icon={theme === "light" ? faMoon : faMoonSolid}
      />
      <p className="toggle_theme__label">Dark mode</p>
    </button>
  );
};

export default ToggleTheme;
