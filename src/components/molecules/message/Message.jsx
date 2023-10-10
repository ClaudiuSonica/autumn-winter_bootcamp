/* eslint-disable react/prop-types */
import Summary from "../summary/Summary";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <p>Excellent!</p>
      <p>See you in November 2023!</p>
      <Summary />
    </div>
  );
};

export default Message;
