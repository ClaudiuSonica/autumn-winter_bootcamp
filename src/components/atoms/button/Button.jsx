/* eslint-disable react/prop-types */
import "./Button.scss";

const Button = ({ children, className, type }) => {
  return <button type={type} className={`button ${className}`}>{children}</button>;
};

export default Button;
