import React from "react";

const ListGroup = ({
	items,
	textProperty,
	valueProperty,
	selectedItem,
	onItemClick,
}) => {
	return (
		<div className="btn-group mb-2 d-flex flex-wrap">
			{items.map((item) => (
				<button
					key={item[valueProperty]}
					type="button"
					className={
						item === selectedItem ? "btn btn-light m-0 active" : "btn btn-light m-0"
					}
					onClick={() => onItemClick(item)}>
					{item[textProperty]}
				</button>
			))}
		</div>
	);
};

ListGroup.defaultProps = { valueProperty: "_id", textProperty: "name" };
export default ListGroup;
