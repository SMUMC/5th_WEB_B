import React, { useEffect, useState } from 'react';
import Movie from './movie';
import styled from 'styled-components';
import Loading from './Loading';
import { Link } from 'react-router-dom';
function ReuseMovie({ apiUrl, totalPages, updateTotalPages }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
  
          if (totalPages !== responseData.total_pages) {
            updateTotalPages(responseData.total_pages);
          }
  
          setLoading(false);
        } catch (err) {
          setError(err);
        }
      };
  
      fetchData();
    }, [apiUrl, totalPages, updateTotalPages]);
  
    return (
      <Container>
        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            {error ? (
              <p style={{ color: 'white' }}>Error: {error.message}</p>
            ) : (
              data.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <Movie
                    title={movie.title}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                    overview={movie.overview}
                    cast={movie.cast}
                  />
                </Link>
              ))
            )}
          </>
        )}
      </Container>
    );
  }
          
const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 70px;
  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  @media (min-width: 1201px) {
    display: grid;
    width: 85%;
    grid-template-columns: repeat(auto-fill, minmax(14%, 1fr));
    gap: 1rem;
  }
`;

export default ReuseMovie;
