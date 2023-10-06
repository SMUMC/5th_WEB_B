import './App.css';
import {movies} from './movieDummy';
import Movie from './Components/Movie';
// const API_KEY = "3beedda18e2f45038f52ec441bd0938a"
// const API_URL = "https://api.themoviedb.org/3/movie/"

function App() {


  return (
    <div className="movies-container">
      {movies.results.map((movieData) => (
        <Movie
          key={movieData.id} 
          imageSrc={movieData.backdrop_path}
          detail={movieData.overview}
          title={movieData.title}
          avg={movieData.vote_average}
        />
      ))}
    </div>
  );
}

export default App;
