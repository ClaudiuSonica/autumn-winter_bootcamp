/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../atoms/button/Button";
import Error from "../../molecules/error/Error";
import "./Form.scss";
import FormContainer from "../../molecules/formContainer/FormContainer";
import ContactInfo from "../../molecules/contactInfo/ContactInfo";
import Address from "../../molecules/addressInfo/AddressInfo";

const Form = ({ formData, handleChange, isSubmitted, setIsSubmitted }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address1,
    address2,
    country,
    state,
    city,
  } = formData;

  const [inputValidity, setInputValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    address1: true,
    country: true,
    city: true,
  });

  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        if (data && data.data && Array.isArray(data.data)) {
          setCountries(data.data.map((country) => country.country));
        } else {
          console.error("Invalid API response format:", data);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const fetchStatesForCountry = async (selectedCountry) => {
    try {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({ country: selectedCountry }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        requestOptions
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();

      if (data && data.data && Array.isArray(data.data.states)) {
        setStates(data.data.states);
      } else {
        console.log("Invalid API response format for states:", data);
      }
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const handleCountryChange = (selectedCountry) => {
    handleChange({
      target: { name: "country", value: selectedCountry },
    });

    handleChange({
      target: { name: "state", value: "" },
    });

    // Fetch and update states based on the selected country
    fetchStatesForCountry(selectedCountry);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];

    for (const key in formData) {
      if (e.target[key].hasAttribute("required") && !formData[key]) {
        errors.push(`${key} is required`);
        inputValidity[key] = false;
      } else {
        inputValidity[key] = true;
      }
    }

    setInputValidity({ ...inputValidity });
    setIsSubmitted(true);

    if (errors.length === 0) {
      setFormErrors([]);
      navigate("/success");
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <FormContainer handleSubmit={handleSubmit}>
        <ContactInfo
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          handleChange={handleChange}
          isSubmitted={isSubmitted}
          inputValidity={inputValidity}
        />
        <Address
          address1={address1}
          address2={address2}
          country={country}
          city={city}
          state={state}
          handleChange={handleChange}
          handleCountryChange={handleCountryChange}
          isSubmitted={isSubmitted}
          inputValidity={inputValidity}
          countries={countries}
          states={states}
        />
        <div className="bottom__form">
          {isSubmitted && <Error errors={formErrors} />}
          <Button type={"submit"} className={"form__btn"}>
            Join Us
          </Button>
        </div>
      </FormContainer>
    </>
  );
};

export default Form;
