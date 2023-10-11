import { Link } from "react-router-dom";
import Button from "../../atoms/button/Button";
import ConstPage from "../../atoms/constPage/ConstPage";

import "./Const.scss";

import css from "/images/css.svg";
import html from "/images/html.svg";
import js from "/images/js.svg";
import react from "/images/react.svg";

const items = [html, css, js, react];

const Const = () => {
  return (
    <section className="section__const">
      <div className="const">
        <h2 className="const__text">
          <span>const</span>
          {" { "}
          {items.map((item) => (
            <span className="const__img" key={item}>
              <img src={item} alt={item} />
            </span>
          ))}
          {"}"}
        </h2>
        <span className="const__equal">=</span> <ConstPage />
      </div>
      <Link to="/form">
        <Button>Join Us</Button>
      </Link>
    </section>
  );
};

export default Const;
