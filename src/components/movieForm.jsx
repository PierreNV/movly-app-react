import React from "react";
import Joi from "joi";
import Form from "./common/form";
import { withRouter } from "./common/withRouter";
import { getGenres } from "../services/servGenres";
import { getMovie, saveMovie } from "../services/servMovies";

class MovieForm extends Form {
	state = {
		data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
		errors: {},
		genres: [],
		notFound: false,
	};

	schema = Joi.object({
		_id: Joi.string(),
		title: Joi.string().max(50).label("Title"),
		genreId: Joi.string().label("Genre"),
		numberInStock: Joi.number().max(10).label("Stock"),
		dailyRentalRate: Joi.number().max(10).label("Rating"),
	});

	async componentDidMount() {
		await this.setGenres();
		await this.setMovie();
	}

	async setGenres() {
		const { data: genres } = await getGenres();
		this.setState({ genres });
	}

	async setMovie() {
		try {
			const movieId = this.props.params.id;
			if (movieId === "new") {
				return;
			}
			const { data: movie } = await getMovie(movieId);
			this.setState({ data: this.mapToMovieForm(movie) });
		} catch (error) {
			if (error.response && error.response.status === 404)
				return this.props.navigate("/not-found");
		}
	}

	mapToMovieForm(movie) {
		return {
			_id: movie._id,
			title: movie.title,
			genreId: movie.genre._id,
			numberInStock: movie.numberInStock,
			dailyRentalRate: movie.dailyRentalRate,
		};
	}

	saveHandler = async () => {
		await saveMovie(this.state.data);
		return this.props.navigate("/movies");
	};

	render() {
		return (
			<>
				<h1>Movie form - {this.props.params.id} </h1>
				{this.renderInputField("title", "Title")}
				{this.renderSelectField("genreId", "Genre", this.state.genres)}
				{this.renderInputField("numberInStock", "Stock")}
				{this.renderInputField("dailyRentalRate", "Rate")}
				{this.renderButton("save", this.saveHandler)}
			</>
		);
	}
}

export default withRouter(MovieForm);
