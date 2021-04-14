import { Component } from 'react'

class HomeView extends Component {
    state = {
        query: '',
    }

    handleChange = e => {
        this.setState({ query: e.currentTarget.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        // console.log(this.state);
        this.props.onSubmit(this.state.query)
        this.setState({ query: '' })
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

                    </form>
                </header>
            </>)
    }
}

export default HomeView