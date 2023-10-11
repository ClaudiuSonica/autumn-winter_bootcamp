import { Link } from "react-router-dom";

import "./Logo.scss";
import logo from "/images/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="ddroidd logo" />
    </Link>
  );
};

export default Logo;
