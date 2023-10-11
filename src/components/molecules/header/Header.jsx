import "./Header.scss";

import { Link, useLocation } from "react-router-dom";

import Button from "../../atoms/button/Button";
import Logo from "../../atoms/logo/Logo";
import Title from "../../atoms/title/Title";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Logo />
      <Title />
      {location.pathname === "/" && (
        <Link to="/form">
          <Button>Join Us</Button>
        </Link>
      )}
    </header>
  );
};

export default Header;
