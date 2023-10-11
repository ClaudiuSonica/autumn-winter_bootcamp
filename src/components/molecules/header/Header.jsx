import "./Header.scss";

import Button from "../../atoms/button/Button";
import Logo from "../../atoms/logo/Logo";
import Title from "../../atoms/title/Title";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Title />
      <Link to="/form">
        <Button>Join Us</Button>
      </Link>
    </header>
  );
};

export default Header;
