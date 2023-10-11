/* eslint-disable react/prop-types */
import Form from "../organisms/form/Form";

const ApplicationForm = ({ formData, handleChange, isSubmitted, setIsSubmitted }) => {
  return (
    <>
      <Form
        formData={formData}
        handleChange={handleChange}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
    </>
  );
};

export default ApplicationForm;
