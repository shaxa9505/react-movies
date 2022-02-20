import React, { Component } from 'react';

class Search extends Component {

    state = {
        search: "panda",
        type: "all"
    }

    changeClick = (e) => {
        this.setState({ search: e.target.value })
    }

    handleClick = (e) => {
        if (e.key === "Enter") {
            this.props.Search(this.state.search, this.state.type)
        }
    }

    handleFilter = (e) => {
        this.setState({type: e.target.dataset.type}, () => {
            this.props.Search(this.state.search, this.state.type)
        })
    }


    render(props) {
        return (
            <div>
                <div className="Search">
                    <input
                        type="search"
                        onChange={this.changeClick}
                        value={this.state.search}
                        placeholder="Search..."
                        onKeyDown={this.handleClick}
                    />
                    <button className="btn_red" onClick={() => this.props.Search(this.state.search, this.state.type)}>Submit</button>
                </div>
                <div>
                    <label>
                        <input className="with-gap" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === "all"} />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === "movie"} />
                        <span>Movie only</span>
                    </label>
                    <label>
                        <input className="with-gap" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === "series"} />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Search;