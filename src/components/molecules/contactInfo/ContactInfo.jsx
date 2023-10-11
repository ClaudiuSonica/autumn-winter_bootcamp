/* eslint-disable react/prop-types */

const ContactInfo = ({
  firstName,
  lastName,
  email,
  phone,
  handleChange,
  isSubmitted,
  inputValidity,
}) => {
  return (
    <div className="form__contact">
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
                  isSubmitted && !inputValidity.lastName ? "1px solid red" : "",
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
    </div>
  );
};

export default ContactInfo;
