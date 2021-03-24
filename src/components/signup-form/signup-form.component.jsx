import React from "react";
import CustomButton from "../button/button.component";
import axios from "axios";

class SignUpForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    //call the server
    console.log("submitted");
  };

  render() {
    return (
      <React.Fragment>
        <div className="reg-div shadow-lg  animate__animated animate__slideInUp">
          <h1 className="reg mb-4">Sign Up</h1>
          <form method="POST" onSubmit={this.handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="tel"
                name="phonenumber"
                placeholder="Phone number"
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <CustomButton label="Sign up" size="120px" type="submit" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
