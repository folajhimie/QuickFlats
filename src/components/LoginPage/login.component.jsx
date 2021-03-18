import React from "react";
import LoginForm from "../login-form/login-form.component";
import SignUpForm from "../signup-form/signup-form.component";
import "./login.styles.css";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row form-div">
          <LoginForm />
          <SignUpForm />
        </div>
      </div>
    );
  }
}

export default Login;
