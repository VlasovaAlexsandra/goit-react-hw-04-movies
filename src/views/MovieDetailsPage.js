import Axios from 'axios'
import { Component } from "react"
import { Link, Route, Switch } from 'react-router-dom'
import Cast from '../components/Cast'
import Reviews from '../components/Reviews'
import { apiKey } from '../services/movies-api'
import PropTypes from "prop-types"

class MovieId extends Component {
    state = {
        casts: [],
        contents: [],
        adult: null,
        backdrop_path: null,
        belongs_to_collection: null,
        genres: null,
        profile_path: null,
        poster_path: null,
        homepage: null,
        id: null,
        original_language: null,
        original_title: null,
        overview: null,
        popularity: null,
        production_companies: null,
        production_countries: null,
        release_date: '',
        revenue: null,
        runtime: null,
        spoken_languages: null,
        status: null,
        tagline: null,
        title: null,
        actors: null,
        reviews: null,
        vote_average: null

    }

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        this.setState({ ...response.data })

    }
    handleGoBack = () => {
        const { location } = this.props
        this.props.history.push(location.state.from)

    }

    render() {
        const { location } = this.props
        const year = this.state.release_date.slice(0, 4)
        const image = this.state.poster_path ? `https://image.tmdb.org/t/p/w500/${this.state.poster_path}` : ""
        return <>

            <button type="button" onClick={this.handleGoBack}>Go back</button>
            <div className="MovieGallery ">
                <img src={image} alt=""></img>
                <div className="Description_container">
                    <h2 className="Title">{this.state.title} {year}</h2>

                    <p>User score: {(this.state.vote_average) * 10}%</p>

                    <h3 className="Overview_title">Overview</h3>
                    <p>{this.state.overview}</p>

                    <h3 className="Genres_title">Genres</h3>
                    <ul>
                        {this.state.genres
                            ? this.state.genres.map(genre => (
                                <li key={genre.id}>{genre.name} </li>
                            ))
                            : null}
                    </ul>
                </div>
            </div>


            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link
                        to={{
                            pathname: `/movies/${this.props.match.params.movieId}/cast`,
                            state: { from: location.state.from }
                        }}

                    >Cast</Link>
                </li>
                <li>
                    <Link
                        to={{
                            pathname: `/movies/${this.props.match.params.movieId}/reviews`,
                            state: { from: location.state.from }
                        }}

                    >Reviews</Link>
                </li>


            </ul>
            <Switch>
                <Route
                    path="/movies/:movieId/cast"
                    component={Cast}
                // render={() => <Cast actors={actors} />}
                />
                <Route
                    path="/movies/:movieId/reviews"
                    component={Reviews}
                // render={() => <Reviews reviews={reviews} />}
                />
            </Switch>

        </>

    }
}

MovieId.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}



export default MovieId