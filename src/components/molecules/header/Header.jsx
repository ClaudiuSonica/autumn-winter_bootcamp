import "./Header.scss";

import Button from "../../atoms/button/Button";
import Logo from "../../atoms/logo/Logo";
import Title from "../../atoms/title/Title";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Title />
      <Button>Join Us</Button>
    </header>
  );
};

export default Header;
