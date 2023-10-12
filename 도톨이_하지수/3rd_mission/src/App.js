import Movies from '../../4th_mission/src/components/Movies';
import React, { useState } from "react";
import { movies } from './movieDummy';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function App() {
    return (
    <div>
      <div className="app-container">
      {
        movies.results.map((item) => {
        return (
          <Movies
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview} 
          />
    );
  })
}
      </div>
    </div>
  );
}

export function Movie({ title, poster_path, vote_average, overview }) {
  const [isHovered, setIsHovered] = useState(false); 
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="movie-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      
      <div className="hover-box">
        {isHovered && (
          <div>
            <h3>{title}</h3> 
            <p>{overview}</p>
          </div>
        )}
      </div>

      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
        
      </div>
    </div>
  );
}
