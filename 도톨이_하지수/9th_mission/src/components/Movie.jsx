import React from "react";
import { MovieContainer, MovieInfo } from "../style/Movie.style";
import { useNavigate } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({ title, poster_path, vote_average, movieId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(movieId);
    navigate(`/MovieDetail/${movieId}`);
  };

  return (
    <MovieContainer>
      <img
        src={IMG_BASE_URL + poster_path}
        alt="영화포스터"
        onClick={handleClick}
      />
      <MovieInfo>
        <h4>{title}</h4>
        <span>{vote_average.toFixed(1)}</span>
      </MovieInfo>
    </MovieContainer>
  );
}
