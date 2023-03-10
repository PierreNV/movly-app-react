import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortedColumn, onSort, data }) => {
	return (
		<table className="table table-dark table-striped align-middle">
			<TableHeader
				columns={columns}
				sortedColumn={sortedColumn}
				onSort={onSort}
			/>
			<TableBody
				data={data}
				columns={columns}
			/>
		</table>
	);
};

export default Table;
