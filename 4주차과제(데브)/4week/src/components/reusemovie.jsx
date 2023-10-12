import React, { useEffect, useState } from 'react';
import Movie from './movie';
import styled from 'styled-components';
import Loading from './Loading';

function ReuseMovie({ apiUrl }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmM2ODZkMDdhMTcxNDUyZWUyYzM2MGUwODFjNjAxMyIsInN1YiI6IjY0NzRjMGFhNWNkMTZlMDBiZjEyNDQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgYpZS6S6GHYU8eq2rRevqoZz5g80tZ7hZ5KJ3soHVU `, // 고정된 Bearer 토큰 사용
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        setData(responseData.results);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [apiUrl]); // apiUrl과 bearerToken을 의존성 배열에 추가

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error ? (
            <p style={{ color: 'white' }}>Error: {error.message}</p>
          ) : (
           
              data.map((movie) => (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  vote_average={movie.vote_average}
                  overview={movie.overview}
                />
              ))
            
          )}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top:10px;
margin-bottom: 70px;
/* 화면 폭이 768px 이하일 때 */
@media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:1rem;
  
}
@media (min-width: 1201px) {
  
    display: grid;
    width: 85%;
    grid-template-columns: repeat(auto-fill, minmax(10%, 1fr)); /* 8개씩 반복, 반응형 설정 */
    gap: 1rem; /* 아이템 간격 조정 */
  
}
`;







export default ReuseMovie;
