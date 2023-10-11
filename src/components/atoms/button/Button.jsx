/* eslint-disable react/prop-types */
import "./Button.scss";

const Button = ({ children, className, type, onClick }) => {
  return <button onClick={onClick} type={type} className={`button ${className}`}>{children}</button>;
};

export default Button;
