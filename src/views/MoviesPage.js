import { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const apiKey = '2986a356ef3a214eb0a4615eddf8ffa1'


class Movies extends Component {
    state = {
        movies: [],
    }

    async componentDidMount() {
        const response = await Axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
        // console.log(response.data.results)
        this.setState({ movies: response.data.results })

    }

    render() {
        // console.log(this.props.match.url)
        return (
            <>
                <h1>This is movies page</h1>

                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${this.props.match.url}/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}


export default Movies