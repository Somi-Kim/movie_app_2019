import React from 'react';
// import Potato from './Potato'; // 경로에서 >>>>> ./ <<<<< 는 같은 directory를 의미
// import PropTypes from "prop-types";
import axios from "axios";
import Movie from './Movie'
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies);
    this.setState({ movies, isLoading: false }); // this.setState({ movies : movies });
  }
  componentDidMount() {
    this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state;
    // console.log(movies);
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading. . .</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
              />
            ))}
          </div>
        )}    
      </section>
      )
  }
}

export default App;
