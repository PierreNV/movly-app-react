import React, { Component } from "react";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

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
      key: "like",
      content: (movie) => this.props.user && <Like onLike={() => this.props.onLike(movie)} liked={movie.liked} />,
    },
    {
      key: "remove",
      content: (movie) => (
        <button disabled={!this.props.user?.isGlobalAdmin} type="button" className="btn btn-danger" onClick={() => this.props.onRemove(movie)}>
          <BsTrash />
        </button>
      ),
    },
  ];

  render() {
    const { currentPageMovies, sortedColumn, onSort } = this.props;
    return (
      <div className="table-responsive rounded mb-2">
        <Table columns={this.columns} data={currentPageMovies} sortedColumn={sortedColumn} onSort={onSort} />
      </div>
    );
  }
}

export default MoviesTable;
