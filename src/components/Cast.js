import { Component } from "react";
import Axios from 'axios'
import { apiKey } from '../services/movies-api'
import PropTypes from "prop-types";

class Cast extends Component {
    state = {
        casts: [],
        // profile_path: ""
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`)
        this.setState({ casts: response.data.cast })
    }


    render() {
        const img = 'https://image.tmdb.org/t/p/w200'

        return (

            <>
                <h3>Cast</h3>
                <ul>
                    {this.state.casts.map(cast => (

                        <li key={cast.id}>
                            <p>{cast.name}</p>

                            <img src={(cast.profile_path) ? (img + cast.profile_path) : ""} alt="" />

                        </li>
                    ))}

                </ul>
            </>
        )


    }
}

Cast.propTypes = {
    movieId: PropTypes.string,

}

export default Cast