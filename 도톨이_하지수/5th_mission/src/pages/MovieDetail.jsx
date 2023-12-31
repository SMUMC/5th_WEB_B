import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailImg,
  DetailContext,
} from "../components/Movies.style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetail() {
  const location = useLocation();
  // ES6 Destructuring 구조분해할당
  const { title, poster_path, vote_average, overview } = location.state;
  console.log(location.state);

  function star_average(vote_average) {
    const average = Math.round(vote_average);
    const stars = "⭐️".repeat(average);

    return stars;
  }

  return (
    <DetailContainer>
      <DetailImg src={`${IMG_BASE_URL}${poster_path}`} />
      <DetailContext>
        <h1>{title}</h1>
        <h2>평점: {star_average(vote_average)}</h2>
        <h3>
          {overview
            ? overview
            : "TMDB에서 제공해주는 상세 줄거리 정보가 없습니다."}{" "}
        </h3>
      </DetailContext>
    </DetailContainer>
  );
}
