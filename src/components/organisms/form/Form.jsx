/* eslint-disable react/prop-types */
import { useState } from "react";

import Button from "../../atoms/button/Button";
import Error from "../../molecules/error/Error";
import "./Form.scss";
import { useNavigate } from "react-router-dom";

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

  const [formErrors, setFormErrors] = useState([]);

  const navigate = useNavigate();

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
              <input
                value={country}
                onChange={handleChange}
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                required
                style={{
                  border:
                    isSubmitted && !inputValidity.country
                      ? "1px solid red"
                      : "",
                }}
              />
            </div>
            <div className="row">
              <label htmlFor="state">State</label>
              <input
                value={state}
                onChange={handleChange}
                type="text"
                id="state"
                name="state"
                placeholder="State"
              />
            </div>
            <div className="row">
              <label htmlFor="city">
                City<span>*</span>
              </label>
              <input
                value={city}
                onChange={handleChange}
                type="text"
                id="city"
                name="city"
                placeholder="City"
                required
                style={{
                  border:
                    isSubmitted && !inputValidity.city ? "1px solid red" : "",
                }}
              />
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
