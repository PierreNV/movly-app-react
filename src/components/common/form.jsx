import React, { Component } from "react";
import InputField from "./inputField";
import SelectField from "./selectField";

class Form extends Component {
	state = {
		data: {},
		errors: {},
	};

	renderInputField(name, label, type = "text", autoComplete, autoFocus = false) {
		const { data, errors } = this.state;
		return (
			<InputField
				name={name}
				label={label}
				type={type}
				autoComplete={autoComplete}
				autoFocus={autoFocus}
				value={data[name]}
				onChange={this.changeHandler}
				error={errors[name]}
				className="form-control"
			/>
		);
	}

	renderSelectField(name, label, options) {
		const { data, errors } = this.state;
		return (
			<SelectField
				name={name}
				value={data[name]}
				label={label}
				options={options}
				onChange={this.changeHandler}
				error={errors[name]}
				className="form-control"
			/>
		);
	}

	renderButton(label, onClick) {
		return (
			<button
				disabled={this.validateForm()}
				className="btn btn-primary mb-3"
				onClick={(submit) => {
					onClick(submit);
				}}>
				{label}
			</button>
		);
	}

	changeHandler = (input) => {
		const { name, value } = input.target;
		const error = this.validateProperty(input);
		const errors = { ...this.state.errors };
		if (error) errors[name] = error;
		else delete errors[name];
		const data = { ...this.state.data };
		data[name] = value;
		this.setState({ data, errors });
	};

	validateProperty = (input) => {
		const { name, value } = input.target;
		if (name === "confirmPassword") {
			const fields = { password: this.state.data.password, [name]: value };
			const { error } = this.schema.validate(fields);
			return error ? error.details[0].message : null;
		} else {
			const field = { [name]: value };
			const { error } = this.schema.validate(field);
			return error ? error.details[0].message : null;
		}
	};

	validateForm = () => {
		const { data } = this.state;
		const { error } = this.schema.validate(data);
		if (!error) return null;
		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;
		return errors;
	};

	submitHandler = (submit) => {
		submit.preventDefault();
		const errors = this.validateForm();
		this.setState({ errors: errors || {} });
		if (errors) return;
		this.confirmSubmitHandler();
	};
}

export default Form;
