import React from "react";

const ListGroup = ({
	items,
	textProperty,
	valueProperty,
	selectedItem,
	onItemClick,
}) => {
	return (
		<div className="btn-group dropend mb-2">
			<button
				className="btn btn-outline-primary dropdown-toggle"
				type="button"
				id="dropdownMenuClickableInside"
				data-bs-toggle="dropdown"
				data-bs-auto-close="outside"
				aria-expanded="false">
				Genres
			</button>
			<div
				className="dropdown-menu p-0"
				aria-labelledby="dropdownMenuClickableInside">
				<div className="btn-group">
					{items.map((item) => (
						<button
							key={item[valueProperty]}
							type="button"
							className={
								item === selectedItem ? "btn btn-light active" : "btn btn-light"
							}
							onClick={() => onItemClick(item)}>
							{item[textProperty]}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

ListGroup.defaultProps = { valueProperty: "_id", textProperty: "name" };
export default ListGroup;
