
import React from 'react';
import './index.css'; 

const MovieList = ({ movies }) => {
  return (
    <div>
      <h1>영화 목록</h1>
      <div className="movie-list">
        {movies.results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="overlay">
              <h2>{movie.title}</h2>
              <p>개봉일: {movie.release_date}</p>
              <p>평점: {movie.vote_average}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
