import React, { Component } from "react";

class TableHeader extends Component {
	sortColumn = (path) => {
		const sortedColumn = { ...this.props.sortedColumn };
		if (sortedColumn.path === path)
			sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
		else {
			sortedColumn.path = path;
			sortedColumn.order = "asc";
		}
		this.props.onSort(sortedColumn);
	};
	renderSortIcon = (column) => {
		const { sortedColumn } = this.props;
		if (column.key) return null;
		if (column.path !== sortedColumn.path)
			return (
				<i
					className="fa fa-sort "
					aria-hidden="true"
					role="button"></i>
			);
		if (sortedColumn.order === "asc")
			return (
				<i
					className="fa fa-sort-asc"
					aria-hidden="true"
					role="button"></i>
			);
		return (
			<i
				className="fa fa-sort-desc"
				aria-hidden="true"
				role="button"></i>
		);
	};
	render() {
		return (
			<thead>
				<tr>
					{this.props.columns.map((column) => (
						<th
							key={column.path || column.key}
							onClick={() => this.sortColumn(column.path)}>
							{column.label} {this.renderSortIcon(column)}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}

export default TableHeader;
