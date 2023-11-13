import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function MovieInfo() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  function convertRatingToStars(rating) {
    const numStars = Math.floor(rating); // 소수점 내림 처리
    const stars = [];
    
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <StarContainer key={i}>
          <StarIcon>&#9733;</StarIcon> {/* 별 이모지 사용 */}
        </StarContainer>
      );
    }
    
    return stars;
  }

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=ko&page=1`;

    const fetchMovieInfo = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmM2ODZkMDdhMTcxNDUyZWUyYzM2MGUwODFjNjAxMyIsInN1YiI6IjY0NzRjMGFhNWNkMTZlMDBiZjEyNDQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgYpZS6S6GHYU8eq2rRevqoZz5g80tZ7hZ5KJ3soHVU ',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMovieInfo(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieInfo();
  }, [id]);

  return (
    <Container>
      {movieInfo ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.title}
          />
          <TextContainer>
          <h2>{movieInfo.title}</h2>
          <p>평점 : {convertRatingToStars(movieInfo.vote_average)}</p>
          <p>영화 줄거리 : {movieInfo.overview}</p>
          
          </TextContainer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  color: white;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 90vh;
  }
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    padding-left: 15px;

`
const StarContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
`;

const StarIcon = styled.span`
  font-size: 24px; /* 별의 크기 설정 */
  color: #FFD700; /* 별의 색상 설정 (금색) */
`;
export default MovieInfo;