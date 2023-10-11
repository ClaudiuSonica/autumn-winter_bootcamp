/* eslint-disable react/prop-types */
import "./Summary.scss";

// eslint-disable-next-line react/prop-types
const Summary = ({ formData }) => {
  const { firstName, lastName, email, phone, address1, country, state } =
    formData;

  return (
    <div className="summary">
      <h3>Submission Summary:</h3>
      <div className="summary__list">
        <ul>
          <li>First Name: {firstName}</li>
          <li>Last Name: {lastName}</li>
          <li>Phone number: {phone}</li>
          <li>Email: {email}</li>
          <li>Address: {address1}</li>
          <li>Country: {country}</li>
          <li>State: none</li>
          <li>City: {state}</li>
        </ul>
      </div>
    </div>
  );
};

export default Summary;
