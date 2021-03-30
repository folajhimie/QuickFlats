import React from "react";
import { Link, withRouter } from "react-router-dom";
import Input from "../input";
import Form from "../Form/form";
import Joi from "joi-browser";
import CustomButton from "../button/button.component";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../services/authService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("email"),
    password: Joi.string().required().min(5).label("password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: result } = await login(data.email, data.password);
      localStorage.setItem("token", result.token);
      setTimeout(() => {
        toast.success("login successful");
      }, 2000);
      this.props.history.push("/dashboard");
    } catch (e) {
      if (e.response && e.response.status === 401) {
        let errors = { ...this.state.errors };
        errors = e.response.data;
        console.log(errors);
        toast.error(errors.message);
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        <div className="login-div animate__animated animate__slideInRight">
          <h1 className="log mb-4">Login</h1>
          <form method="" onSubmit={this.handleSubmit}>
            <Input
              name="email"
              value={data.email}
              onChange={this.handleChange}
              error={errors.email}
            />
            <Input
              name="password"
              value={data.password}
              onChange={this.handleChange}
              error={errors.password}
              type="password"
            />

            <Link to="#" className="mb-3 forgot-password">
              <p> forgot password?</p>
            </Link>
            <CustomButton label="Log in" size="120px" invertedButton />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(LoginForm);
