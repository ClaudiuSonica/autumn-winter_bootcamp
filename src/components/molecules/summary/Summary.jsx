import "./Summary.scss";

const Summary = () => {
  return (
    <div className="summary">
      <h3>Submission Summary:</h3>
      <div className="summary__list">
        <ul>
          <li>First Name: John</li>
          <li>Last Name: Doe</li>
          <li>Phone number: +40712345678</li>
          <li>Email: johndoe@email.com</li>
          <li>Address: Address</li>
          <li>Country: Romania</li>
          <li>State: none</li>
          <li>City: Cluj</li>
        </ul>
      </div>
    </div>
  );
}

export default Summary;