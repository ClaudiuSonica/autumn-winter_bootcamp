/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../atoms/button/Button";
import Error from "../../molecules/error/Error";
import "./Form.scss";

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

      console.log(data.data.states)

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
      <form onSubmit={handleSubmit} noValidate>
        <h2 className="form__title">Application Form</h2>
        <div className="form__contact">
          <h3 className="form__subtitle">Contact Information</h3>
          <div className="col">
            <div className="row">
              <label htmlFor="firstName">
                First Name<span>*</span>
              </label>
              <input
                value={firstName}
                onChange={handleChange}
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
                style={{
                  border:
                    isSubmitted && !inputValidity.firstName
                      ? "1px solid red"
                      : "",
                }}
              />
            </div>
            <div className="row">
              <label htmlFor="phone">
                Phone Number<span>*</span>
              </label>
              <input
                value={phone}
                onChange={handleChange}
                type="tel"
                id="phone"
                name="phone"
                placeholder="+40 712 345 678"
                required
                style={{
                  border:
                    isSubmitted && !inputValidity.phone ? "1px solid red" : "",
                }}
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <label htmlFor="lastName">
                Last Name<span>*</span>
              </label>
              <input
                value={lastName}
                onChange={handleChange}
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
                style={{
                  border:
                    isSubmitted && !inputValidity.lastName
                      ? "1px solid red"
                      : "",
                }}
              />
            </div>
            <div className="row">
              <label htmlFor="email">
                Email address<span>*</span>
              </label>
              <input
                value={email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="jondoe@email.com"
                required
                style={{
                  border:
                    isSubmitted && !inputValidity.email ? "1px solid red" : "",
                }}
              />
            </div>
          </div>
        </div>
        <div className="form__address">
          <h3 className="form__subtitle">Address</h3>
          <div className="row">
            <label htmlFor="address1">
              Address Line 1<span>*</span>
            </label>
            <input
              value={address1}
              onChange={handleChange}
              type="text"
              id="address1"
              name="address1"
              placeholder="Street name & number"
              required
              style={{
                border:
                  isSubmitted && !inputValidity.address1 ? "1px solid red" : "",
              }}
            />
          </div>
          <div className="row">
            <label htmlFor="address2">Address Line 2</label>
            <input
              value={address2}
              onChange={handleChange}
              type="text"
              id="address2"
              name="address2"
              placeholder="Apartment, suite, etc."
            />
          </div>
          <div className="row__location">
            <div className="row">
              <label htmlFor="country">
                Country<span>*</span>
              </label>
              <select
                value={country}
                onChange={(e) => {
                  handleChange(e);
                  handleCountryChange(e.target.value);
                }}
                id="country"
                name="country"
                placeholder="Select Country"
                required
                style={{
                  border:
                    isSubmitted && !inputValidity.country
                      ? "1px solid red"
                      : "",
                }}>
                <option value="">Select Country</option>
                {countries &&
                  countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
              </select>
            </div>
            <div className="row">
              <label htmlFor="city">State</label>
              <select
                value={city}
                onChange={handleChange}
                type="text"
                id="city"
                name="city"
                placeholder="Select State">
                <option value="">Select State</option>
                <option value="">No State Found</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="state">
                City<span>*</span>
              </label>
              <select
                value={state}
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                id="state"
                name="state"
                placeholder="Select City"
                required
                style={{
                  border:
                    isSubmitted && !inputValidity.city ? "1px solid red" : "",
                }}>
                <option value="">Select City</option>
                {states.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name.replace(/ County$/, '')}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="bottom__form">
            {formErrors.length > 0 && <Error errors={formErrors} />}
            <Button type={"submit"} className={"form__btn"}>
              Join Us
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
