import React, { Component } from 'react';
import Loading from '../Components/Loading';
import Movies from '../Components/Movies';
import Search from '../Components/Search';

class Main extends Component {

    constructor(){
        super();
        this.state = {
            movies: [],
            loading: true
        }
    }
    
    componentDidMount() {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a9deb32d&s=panda")
            .then(data => data.json())
            .then(data => {
                console.log(data.Search);
                return data
            })
            .then(data => this.setState({movies: data.Search, loading: false}))
    }
    
    Search = (url, type = "all") => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a9deb32d&s=${url}${type !== "all" ? `&type=${type}` : ""}`)
        .then(data => data.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }
    

    render() {
        return (
            <div className="container content">
            <Search Search={this.Search} />
            {this.state.loading ? <Loading/> : <Movies movies={this.state.movies} />}
            </div>
        );
    }
}

export default Main;