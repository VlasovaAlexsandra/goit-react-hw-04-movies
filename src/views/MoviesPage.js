import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
// import Axios from 'axios';
// import { apiKey } from '../services/movies-api';
import { searchData } from '../services/hits-api';
import PropTypes from "prop-types";


// const search = (query) => Axios
//     .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
//     .then(({ data }) => data)

class HomeView extends Component {
  state = {
    movies: [],
    query: '',
  };


  componentDidMount() {

    const query = new URLSearchParams(this.props.location.search).get('query');
    if (query) {
      searchData(
        query,
      ).then(({ data: { results } }) =>
        this.setState({ movies: results, query })
      );
    }

  }

  handleChange = e => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    const search = new URLSearchParams()
    e.preventDefault();

    const { query } = this.state;
    search.append('query', query)
    this.props.history.push({
      search: search.toString()
    })
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
          <div className="Searchbar">
            <form onSubmit={this.handleSubmit} className="SearchForm">
              <input
                className="SearchForm-input"
                type="text"
                value={this.state.query}
                onChange={this.handleChange}
              />

              <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
              </button>
            </form>
          </div>
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

        </header>
      </>
    );
  }
}

HomeView.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(HomeView);
