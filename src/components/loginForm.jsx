import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { withRouter } from "./common/withRouter";
import { login } from "../services/servAuth.mjs";
import { Navigate } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object().keys({
    username: Joi.string()
      .max(30)
      .label("Your email")
      .options({ language: { any: { empty: "is required to login." } } }),
    password: Joi.string()
      .min(8)
      .max(30)
      .regex(/^((?=(.*[\d0-9@&#$?%!|(){}[\]]){2,})(?=(.*[a-zA-Z]){2,}).{8,})$/)
      .label("Your password")
      .options({ language: { any: { empty: "is required to login." } } })
      .options({
        language: {
          string: {
            regex: {
              base: "must have a minimum of 8 characters with at least two letters and two digits or symbols",
            },
          },
        },
      }),
  });

  confirmSubmitHandler = async () => {
    try {
      const { data } = this.state;
      await login(data.username, data.password);
      const from = this.props.location.state?.from || "/";
      this.props.navigate(from, { replace: true });
      this.props.navigate(0);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { user } = this.props;
    if (user) {
      return <Navigate to="/" replace />;
    }
    return (
      <>
        <div className="form-signin text-center m-5 d-flex flex-column">
          <h1 className="h3 mb-5 fw-normal">Sign in</h1>
          <form className="col-sm-5 m-auto">
            {this.renderInputField("username", "email", "email", "username", true)}
            {this.renderInputField("password", "password", "password", "current-password")}
            {this.renderButton("Sign in", this.submitHandler)}
            <div className="mb-3">
              <a href="/register">Create an account</a>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(LoginForm);
