import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Heart from "./common/like";

class MoviesTable extends Component {
	columns = [
		{
			path: "title",
			label: "Title",
			content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
		},
		{ path: "genre.name", label: "Genre" },
		{ path: "numberInStock", label: "Stock" },
		{ path: "dailyRentalRate", label: "Rate" },
		{
			key: "heart",
			content: (movie) => (
				<Heart
					onLike={() => this.props.onLike(movie)}
					liked={movie.liked}
				/>
			),
		},
		{
			key: "remove",
			content: (movie) => (
				<button
					disabled={!this.props.isAdmin}
					type="button"
					className="btn btn-danger"
					onClick={() => this.props.onRemove(movie)}>
					remove
				</button>
			),
		},
	];

	render() {
		const { currentPageMovies, sortedColumn, onSort } = this.props;
		return (
			<>
				<Table
					columns={this.columns}
					data={currentPageMovies}
					sortedColumn={sortedColumn}
					onSort={onSort}
				/>
			</>
		);
	}
}

export default MoviesTable;
