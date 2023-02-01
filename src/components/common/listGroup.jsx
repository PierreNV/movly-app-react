import React from "react";

const ListGroup = ({
	items,
	textProperty,
	valueProperty,
	selectedItem,
	onItemClick,
}) => {
	return (
		<div className="d-flex flex-row list-group-item-action mb-2">
			{items.map((item) => (
				<button
					key={item[valueProperty]}
					className={
						item === selectedItem
							? "flex-fill btn btn-light active"
							: "flex-fill btn btn-light"
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
