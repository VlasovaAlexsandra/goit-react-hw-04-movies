import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
// import Axios from 'axios';
// import { apiKey } from '../services/movies-api';
import { searchData } from '../services/hits-api';

// const search = (query) => Axios
//     .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
//     .then(({ data }) => data)

class HomeView extends Component {
  state = {
    movies: [],
    query: '',
  };

  // async componentDidMount(query) {
  //     const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);

  //     this.setState({ movies: response.data.results, query: '' })

  // }

  handleChange = e => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    searchData(
      query,
    ).then(({ data: { results } }) =>
      this.setState({ movies: results }),

    );
  };

  render() {
    return (
      <>
        <header>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
            />

            <button type="submit">
              <span>Search</span>
            </button>
            <ul>
              {this.state.movies.map(movie => (
                <li key={movie.id}>
                  <Link to={`movies/${movie.id}`}>
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </form>
        </header>
      </>
    );
  }
}

export default withRouter(HomeView);
