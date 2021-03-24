import React, { Component } from "react";
import "./listing-user-data.styles.css";
import FormBg from "../../assets/images/formbg.png";

class ListingUserData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="form-con ">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 animate__animated animate__fadeInUp">
              <h2> Let's get started with listing your flat</h2>
              {/* <hr /> */}
              <form action="" className="list-form">
                <ul className="form-style-1">
                  <li>
                    <label>
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="field1"
                      className="field-divided"
                      placeholder="First"
                      onChange={handleChange("firstName")}
                      value={values.firstName}
                    />{" "}
                    <input
                      type="text"
                      name="field2"
                      className="field-divided"
                      placeholder="Last"
                      onChange={handleChange("lastName")}
                      value={values.lastName}
                    />
                  </li>
                  <li>
                    <label>
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="field3"
                      className="field-long"
                      onChange={handleChange("email")}
                      value={values.email}
                    />
                  </li>
                  <li>
                    <label>
                      State<span className="required">*</span>
                    </label>
                    <select
                      name="field4"
                      className="field-select"
                      onChange={handleChange("state")}
                      value={values.state}
                    >
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja</option>
                      {/* <option value="Partnership">Abuja</option>
                      <option value="General Question">Ibadan</option> */}
                    </select>
                  </li>
                  <li>
                    <label>
                      City<span className="required">*</span>
                    </label>
                    <select
                      name="field4"
                      className="field-select"
                      onChange={handleChange("city")}
                      value={values.city}
                    >
                      <option value="Ikeja">Ikeja</option>
                      <option value="Lekki">Lekki</option>
                      <option value="Yaba">Yaba</option>
                    </select>
                  </li>
                  <li>
                    <label>
                      Address <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="field3"
                      className="field-long"
                      onChange={handleChange("address")}
                      value={values.address}
                    />
                  </li>

                  <li>
                    <input
                      value="continue"
                      className="continue"
                      onClick={this.continue}
                    />
                  </li>
                </ul>
              </form>
            </div>
            <div className="col-sm-6">
              <img src={FormBg} alt="form-bg" className="form-bg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingUserData;
