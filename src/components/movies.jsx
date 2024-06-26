import React, { Component } from "react";
import _ from "lodash";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import SearchField from "./common/searchField";
import { paginate } from "../utilities/paginate";
import { getMovies, deleteMovie, likeMovie } from "../services/servMovies.mjs";
import { getGenres } from "../services/servGenres.mjs";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    allMovies: [],
    pageSize: 5,
    currentPage: 1,
    genres: [],
    searchInput: "",
    sortedColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All" }, ...data];
    const { data: allMovies } = await getMovies();
    this.setState({
      allMovies,
      genres,
      selectedGenre: genres[0],
    });
  }

  searchHandler = (input) => {
    this.setState({
      currentPage: 1,
      selectedGenre: this.state.genres[0],
      searchInput: input,
    });
  };

  selectGenreHandler = (genre) => {
    this.setState({ searchInput: "", currentPage: 1, selectedGenre: genre });
  };

  sortHandler = (sortedColumn) => {
    this.setState({ sortedColumn });
  };

  pageClickHandler = (page) => {
    this.setState({ currentPage: page });
  };

  likeMovieHandler = async (movie) => {
    const initialMovies = [...this.state.allMovies];
    const allMovies = [...this.state.allMovies];
    const index = allMovies.indexOf(movie);
    allMovies[index] = { ...allMovies[index] };
    allMovies[index].liked = !allMovies[index].liked;
    this.setState({ allMovies });
    try {
      await likeMovie(movie);
    } catch (error) {
      this.setState({ allMovies: initialMovies });
    }
  };

  removeMovieHandler = async (movie) => {
    const initialMovies = this.state.allMovies;
    const allMovies = initialMovies.filter((movies) => movies._id !== movie._id);
    this.setState({ allMovies });
    try {
      await deleteMovie(movie._id);
    } catch (error) {
      this.setState({ allMovies: initialMovies });
    }
  };

  filterData = () => {
    const { allMovies, selectedGenre, pageSize, currentPage, sortedColumn, searchInput } = this.state;
    let moviesBy = allMovies;
    if (searchInput) moviesBy = allMovies.filter((movie) => movie.title.toLowerCase().match(searchInput.toLowerCase()));
    else if (selectedGenre && selectedGenre._id) moviesBy = allMovies.filter((movie) => movie.genre._id === selectedGenre._id);
    const moviesSorted = _.orderBy(moviesBy, [sortedColumn.path], [sortedColumn.order]);
    const currentPageMovies = paginate(moviesSorted, currentPage, pageSize);
    return {
      itemsCount: moviesSorted.length,
      currentPageMovies,
    };
  };

  getSelectedGenreName = (selectedGenre) => {
    if (selectedGenre) {
      const selectedGenreName = `${selectedGenre["name"]}`;
      return selectedGenreName !== "All" ? selectedGenreName.toLowerCase() : null;
    }
  };

  render() {
    const { user } = this.props;
    const { genres, selectedGenre, pageSize, currentPage, sortedColumn } = this.state;
    const { itemsCount, currentPageMovies } = this.filterData();

    return (
      <>
        {itemsCount ? (
          <p className="pb-2">
            We have {itemsCount} {this.getSelectedGenreName(selectedGenre)} movies in the database.
          </p>
        ) : (
          <p className="d-flex justify-content-between">
            API starting, please wait...
            <span className="spinner-border spinner-border-sm"></span>
          </p>
        )}
        <div className="mb-2">
          <ListGroup items={genres} selectedItem={selectedGenre} onItemClick={this.selectGenreHandler} />
          <SearchField value={this.state.searchInput} onSearch={this.searchHandler} />
          <MoviesTable
            currentPageMovies={currentPageMovies}
            sortedColumn={sortedColumn}
            onSort={this.sortHandler}
            onRemove={this.removeMovieHandler}
            onLike={this.likeMovieHandler}
            user={user}
          />
          <div className="d-flex justify-content-between">
            {user?.isGlobalAdmin ? (
              <Link className="btn btn-primary" to="/movies/new">
                Add
              </Link>
            ) : (
              <button type="button" className="btn btn-primary" disabled>
                Add
              </button>
            )}
            <Pagination moviesAmount={itemsCount} pageSize={pageSize} currentPage={currentPage} onPageClick={this.pageClickHandler} />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
