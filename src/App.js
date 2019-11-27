import React from "react";
import "./App.css";
import axios from "axios";
import "./Popup.js";

console.log(axios);

class App extends React.Component {
  constructor() {
    super();

    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?certification_country=US&primary_release_year=2009&sort_by=popularity.desc&api_key=2ac46b1ad0134455f6ecb68dd9c8e90d")
      .then(response => {
        console.log("this is the good stuff", response);
        if (response && response.data && response.data.results) {
          this.setState({ movies: response.data.results });
        }
      })
      .catch(error => {
        console.log("this is the error", error);
      });

    this.state = {
      movies: []
    };
  }

  render() {
    return (
      <div className="App">
        
          {this.state.movies.map(movie => {
            const poster = "https://image.tmdb.org/t/p/w185/" + movie.poster_path;
            return (<div key={movie.id} className = "movieposter">
              <img src={poster} alt = "" />
              <div className = "hidden"> {movie.overview}</div>
            </div>);
          })}
        
      </div>
    );
  }
}

export default App;
