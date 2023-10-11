/* eslint-disable react/prop-types */
import "./Error.scss";

const Error = ({ errors }) => {
  return (
    <div className="error">
      <p>Please fix the following errors to proceed:</p>
      <ul>
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default Error;
