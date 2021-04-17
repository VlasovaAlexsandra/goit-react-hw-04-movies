import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Axios from 'axios'
import { apiKey } from '../services/movies-api'

class HomeView extends Component {
    state = {
        movies: [],
        query: '',

    }

    handleChange = e => {
        this.setState({ query: e.currentTarget.value })
    }

    handleSubmit = (query, page = 1) => {
        const { history, location } = this.props
        if (!query) {
            return;
        }

        Axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`)
            .then(response => {
                this.setState({ movies: response.data.results, query: '' })
                history.push({
                    pathname: this.props.location.pathname,
                    search: `query=${query}`
                })
                console.log("MoviesPage", location)
            })
    }

    componentDidMount() {
        this.handleSubmit(
            this.props.location.search.split("=")[1] === undefined
                ?
                this.state.query
                : this.props.location.search.split("=")[1]
        )
    }

    render() {

        return (
            <>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.handleSubmit(this.state.query)
                }}>
                    <input
                        type="text"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />

                    <button type="submit" >
                        <span >Search</span>
                    </button>

                    <ul>
                        {this.state.movies.map((movie) =>
                            <li key={movie.id}>
                                <Link to=
                                    {{
                                        pathname: `/movies/${movie.id}`,
                                        state: { from: this.props.location }
                                    }}
                                >
                                    {movie.title}
                                </Link>
                            </li>)}
                    </ul>
                </form>

            </>)
    }
}

export default withRouter(HomeView)