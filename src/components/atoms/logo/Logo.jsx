import "./Logo.scss";
import logo from "/images/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="ddroidd logo" />
    </div>
  );
};

export default Logo;
