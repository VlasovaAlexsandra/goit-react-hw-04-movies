import { Component } from 'react'
// import { Link } from 'react-router-dom'
import Axios from 'axios'
import { apiKey } from '../services/movies-api'

// const search = (query) => Axios
//     .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
//     .then(({ data }) => data)

class HomeView extends Component {
    state = {
        movies: [],
        query: '',
    }

    async componentDidMount(query) {
        const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);

        this.setState({ movies: response.data.results, query: '' })

    }

    handleChange = e => {
        this.setState({ query: e.currentTarget.value })
    }

    handleSubmit = (query) => {
        // const { history, location } = this.props
        // if (!query) {
        //     return;
        // }
        query.preventDefault()
        // console.log(this.state);
        // this.props.onSubmit(this.state.query)
        // this.setState({ query: '' })
    }

    render() {

        return (
            <>
                <header >
                    <form onSubmit={this.handleSubmit}>

                        <input
                            type="text"
                            value={this.state.query}
                            onChange={this.handleChange}
                        />

                        <button type="submit" >
                            <span >Search</span>
                        </button>
                        <ul>
                            {this.state.movies.map(({ id, original_title }) => <li key={id}>{original_title}</li>)}
                        </ul>

                    </form>
                </header>
            </>)
    }
}


export default HomeView