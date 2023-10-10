/* eslint-disable react/prop-types */
import "./Button.scss";

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
