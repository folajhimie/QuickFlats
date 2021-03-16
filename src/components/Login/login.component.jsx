import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../button/button.component";
import "./login.styles.css";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row form-div">
          <div className="login-div">
            <h1 className="log mb-4">Login</h1>
            <form method="post">
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email or Username"
                  className="form-control form-input"
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
              <Link to="#" className="mb-3 forgot-password">
                <p> forgot password?</p>
              </Link>
              <CustomButton label="Log in" size="120px" invertedButton />
            </form>
          </div>

          <div className="reg-div shadow-lg  animated slideInUp">
            <h1 className="reg mb-4">Sign Up</h1>
            <form method="post">
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
              <CustomButton label="Sign up" size="120px" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
