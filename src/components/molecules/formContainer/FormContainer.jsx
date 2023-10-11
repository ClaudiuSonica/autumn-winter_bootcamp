/* eslint-disable react/prop-types */

const FormContainer = ({ children, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="form__title">Application Form</h2>
      {children}
    </form>
  );
};

export default FormContainer;
