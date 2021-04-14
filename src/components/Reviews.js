import { Component } from "react";
import Axios from 'axios';
import { apiKey } from '../services/movies-api'

class Reviews extends Component {
    state = {
        contents: []
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`)
        this.setState({ contents: response.data.results })
    }

    render() {
        return (
            <>
                <h3>Reviews</h3>
                <div>
                    {this.state.contents.map(content => (

                        <div key={content.id}>
                            <p>{content.content}</p>

                        </div>

                    ))}
                </div>
            </>
        )
    }
}

export default Reviews