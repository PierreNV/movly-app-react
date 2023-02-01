import React from "react";

const SelectField = ({ name, label, options, error, ...rest }) => {
	return (
		<div className="form-floating mb-3">
			<select
				className="form-select"
				name={name}
				id={name}
				{...rest}>
				<option value="" />
				{options.map((option) => (
					<option
						key={option._id}
						value={option._id}>
						{" "}
						{option.name}{" "}
					</option>
				))}
			</select>
			<label
				className="form-label"
				htmlFor={name}>
				{label}
			</label>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default SelectField;
