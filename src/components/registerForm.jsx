// import { loginWithJWT } from "../services/servAuth.mjs";
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { withRouter } from "./common/withRouter";
import { register } from "../services/servAuth.mjs";

class RegisterForm extends Form {
  state = {
    data: { username: "", email: "", password: "", confirmPassword: "" },
    errors: {},
    succeed: false,
  };

  schema = Joi.object().keys({
    username: Joi.string()
      .max(30)
      .label("Your username")
      .options({ language: { any: { empty: "is required to register." } } }),
    email: Joi.string().label("Your email").email().max(30),
    password: Joi.string()
      .min(8)
      .max(30)
      .regex(/^((?=(.*[\d0-9@&#$?%!|(){}[\]]){2,})(?=(.*[a-zA-Z]){2,}).{8,})$/)
      .label("Your password")
      .options({ language: { any: { empty: "is required to register." } } })
      .options({
        language: {
          string: {
            regex: {
              base: "must have a minimum of 8 characters with at least two letters and two digits or symbols",
            },
          },
        },
      }),
    confirmPassword: Joi.any()
      .valid(Joi.ref("password"))
      .label("Your password confirmation")
      .options({
        language: { any: { allowOnly: "should match the previous one." } },
      }),
  });

  confirmSubmitHandler = async () => {
    try {
      await register(this.state.data);
      this.props.navigate("/");
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
    return (
      <>
        <div className="form-group text-center m-5 d-flex flex-column">
          <h1 className="h3 mb-5 fw-normal">Register</h1>
          <form className="col-sm-5 m-auto">
            {this.renderInputField("email", "email", "email", "username")}
            {this.renderInputField("password", "password", "password", "new-password")}
            {this.renderInputField("confirmPassword", "password confirmation", "password", "new-password")}
            {this.renderButton("Register", this.submitHandler)}
            <div className="mb-3">
              <a href="/login">Already registered?</a>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(RegisterForm);
