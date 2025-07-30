import ToggleTheme from "../ToggleTheme";

import type { NavbarProps } from "../../types";

import "./Navbar.scss";

const Navbar = ({ title }: NavbarProps) => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">{title}</h1>
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
