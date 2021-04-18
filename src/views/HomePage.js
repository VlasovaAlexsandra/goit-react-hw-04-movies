import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Axios from 'axios';
import { apiKey } from '../services/movies-api';

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {

    Axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
    ).then(response => {
      this.setState({
        movies: response.data.results,
      });

    });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>

        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={{
                pathname: `/movies/${movie.id}`,
                state: { from: this.props.location }
              }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(Movies)
