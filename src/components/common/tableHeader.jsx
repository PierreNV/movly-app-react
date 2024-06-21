import React, { Component } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

class TableHeader extends Component {
  sortColumn = (path) => {
    const sortedColumn = { ...this.props.sortedColumn };
    if (sortedColumn.path === path) sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    this.props.onSort(sortedColumn);
  };
  renderSortIcon = (column) => {
    const { sortedColumn } = this.props;
    if (column.key) return null;
    if (column.path !== sortedColumn.path) return <FaSort />;
    if (sortedColumn.order === "asc") return <FaSortDown />;
    return <FaSortUp />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th key={column.path || column.key} onClick={() => this.sortColumn(column.path)}>
              <div>{column.label}</div>
              <div>{this.renderSortIcon(column)}</div>
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
