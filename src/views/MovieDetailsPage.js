import Axios from 'axios'
import { Component } from "react"
import { Link, Route, Switch } from 'react-router-dom'
import Cast from '../components/Cast'
import Reviews from '../components/Reviews'

const apiKey = '2986a356ef3a214eb0a4615eddf8ffa1'

class MovieId extends Component {
    state = {
        casts: [],
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
        release_date: null,
        revenue: null,
        runtime: null,
        spoken_languages: null,
        status: null,
        tagline: null,
        title: null,
        actors: null,
        reviews: null
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        console.log(response.data)

        this.setState({ ...response.data })

    }
    render() {
        return <>
            <h1>This is movie page{this.props.match.params.movieId}</h1>

            <img src={`https://image.tmdb.org/t/p/w500/${this.state.poster_path}`} alt=""></img>
            <h2>{this.state.title}</h2>
            <p>User Score: {Math.round(this.state.popularity)}%</p>
            <h3>Overview</h3>
            <p>{this.state.overview}</p>
            <h3>Genres</h3>
            <ul>
                {this.state.genres
                    ? this.state.genres.map(genre => (
                        <li key={genre.id}>{genre.name} </li>
                    ))
                    : null}
            </ul>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link
                        to={{
                            pathname: `/movies/${this.props.match.params.movieId}/cast`,
                        }}

                    >
                        Cast
                  </Link>
                </li>
                <li>
                    <Link
                        to={{
                            pathname: `/movies/${this.props.match.params.movieId}/reviews`,
                        }}

                    >
                        Reviews
                  </Link>
                </li>


            </ul>
            <Switch>
                <Route
                    path="/movies/:movieId/cast"
                    component={Cast}
                // render={() => <Cast actors={actors} />}
                />
                {/* <Route
                    path="/movies/:movieId/reviews"
                    component={Reviews}
                // render={() => <Reviews reviews={reviews} />}
                /> */}
            </Switch>
        </>

    }
}


export default MovieId