import { Component } from "react";
import Axios from 'axios'

const apiKey = '2986a356ef3a214eb0a4615eddf8ffa1'

class Cast extends Component {
    state = {
        casts: []
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`)
        this.setState({ casts: response.data.cast })
    }


    render() {

        return (
            <>
                <h3>Cast</h3>
                <ul>
                    {this.state.casts.map(cast => (

                        <li key={cast.id}>
                            <p>{cast.name}</p>
                            <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt="" />

                        </li>
                    ))}

                </ul>
            </>
        )


    }
}

export default Cast