/* eslint-disable react/prop-types */
import Form from "../organisms/form/Form";

const ApplicationForm = ({ formData, handleChange }) => {
  return (
    <>
      <Form formData={formData} handleChange={handleChange} />
    </>
  );
};

export default ApplicationForm;
