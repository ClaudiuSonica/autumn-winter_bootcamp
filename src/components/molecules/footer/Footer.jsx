import "./Footer.scss";

import cookies from "/images/cookies.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Come to the dark side... we have{" "}
        <span>
          <img src={cookies} alt="cookies" />
        </span>
      </p>
    </footer>
  );
};

export default Footer;