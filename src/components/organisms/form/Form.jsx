import Button from "../../atoms/button/Button";
import "./Form.scss";

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
      <h2 className="form__title">Application Form</h2>
        <div className="form__contact">
          <h3 className="form__subtitle">Contact Information</h3>
          <div className="col">
            <div className="row">
              <label htmlFor="firstName">
                First Name<span>*</span>
              </label>
              <input type="text" id="firstName" placeholder="First Name" required />
            </div>
            <div className="row">
              <label htmlFor="phone">
                Phone Number<span>*</span>
              </label>
              <input type="tel" id="phone" placeholder="+40 712 345 678" required />
            </div>
          </div>
          <div className="col">
            <div className="row">
              <label htmlFor="lastName">
                Last Name<span>*</span>
              </label>
              <input type="text" id="lastName" placeholder="Last Name" required />
            </div>
            <div className="row">
              <label htmlFor="email">
                Email address<span>*</span>
              </label>
              <input type="email" id="email" placeholder="jondoe@email.com" required />
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
              type="text"
              id="address1"
              placeholder="Street name & number"
              required
            />
          </div>
          <div className="row">
            <label htmlFor="address2">Address Line 2</label>
            <input
              type="text"
              id="address2"
              placeholder="Apartment, suite, etc."
            />
          </div>
          <div className="row__location">
            <div className="row">
              <label htmlFor="country">
                Country<span>*</span>
              </label>
              <input type="text" id="country" placeholder="Country" required />
            </div>
            <div className="row">
              <label htmlFor="state">State</label>
              <input type="text" id="state" placeholder="State" />
            </div>
            <div className="row">
              <label htmlFor="city">
                City<span>*</span>
              </label>
              <input type="text" id="city" placeholder="City" required />
            </div>
          </div>
        <Button type={"submit"} className={"form__btn"}>
          Join Us
        </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
