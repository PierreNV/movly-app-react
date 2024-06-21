import React from "react";

const ListGroup = ({ items, textProperty, valueProperty, selectedItem, onItemClick }) => {
  return (
    <ul className="nav mb-2">
      <li className="nav-item dropdown">
        <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Genres
        </button>
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li key={item[valueProperty]} className="nav-item">
              <button type="button" className={item === selectedItem ? "dropdown-item active" : "dropdown-item"} onClick={() => onItemClick(item)}>
                {item[textProperty]}
              </button>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

ListGroup.defaultProps = { valueProperty: "_id", textProperty: "name" };
export default ListGroup;
