/* eslint-disable react/prop-types */

const Address = ({
  address1,
  address2,
  country,
  city,
  state,
  handleChange,
  handleCountryChange,
  isSubmitted,
  inputValidity,
  countries,
  states,
}) => {
  return (
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
                isSubmitted && !inputValidity.country ? "1px solid red" : "",
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
              border: isSubmitted && !inputValidity.city ? "1px solid red" : "",
            }}>
            <option value="">Select City</option>
            {states.map((state, index) => (
              <option key={index} value={state.name}>
                {state.name.replace(/ County$/, "")}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Address;
