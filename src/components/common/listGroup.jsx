import React from "react";

const ListGroup = ({
	items,
	textProperty,
	valueProperty,
	selectedItem,
	onItemClick,
}) => {
	return (
		<ul className="list-group mb-2">
			{items.map((item) => (
				<li
					key={item[valueProperty]}
					className={
						item === selectedItem
							? "btn btn-light list-group-item active"
							: "btn btn-light list-group-item"
					}
					onClick={() => onItemClick(item)}>
					{item[textProperty]}
				</li>
			))}
		</ul>
	);
};

ListGroup.defaultProps = { valueProperty: "_id", textProperty: "name" };
export default ListGroup;
