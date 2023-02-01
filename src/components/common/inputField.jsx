import React from "react";

const InputField = ({ name, label, autoComplete, error, ...rest }) => {
	return (
		<div className="form-floating mb-3">
			<input
				className="form-control"
				name={name}
				id={name}
				placeholder={label}
				autoComplete={autoComplete}
				{...rest}
			/>
			<label
				className="form-label"
				htmlFor={name}>
				{label}
			</label>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default InputField;
