import React from "react";

const SearchField = ({
	name = "search",
	placeholder = "search...",
	value,
	onSearch,
	...rest
}) => {
	return (
		<form className="mb-2">
			<input
				className="form-control me-2"
				name={name}
				id={name}
				type={name}
				placeholder={placeholder}
				onChange={(input) => onSearch(input.target.value)}
				value={value}
				{...rest}
			/>
		</form>
	);
};

export default SearchField;
