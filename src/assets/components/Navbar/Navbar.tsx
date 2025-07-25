import ToggleTheme from "../ToggleTheme";

import "./Navbar.scss";

type NavbarProps = {
  title: string;
};

const Navbar = ({ title }: NavbarProps) => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">{title}</h1>
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
