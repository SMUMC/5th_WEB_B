import React, { useState, useEffect } from "react";
import {InputContainer,Input,SearchResultContainer,SearchResult,MovieImage,ContentsContainer} from './searchPage.style'

function SearchPage() {
  const [inputValue, setInputValue] = useState(''); // 초기값은 빈 문자열
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const [apiUrl, setApiUrl] = useState(`https://api.themoviedb.org/3/search/keyword?query=language=ko-KR&page=1`);

  useEffect(() => {
    fetchMovies();
    setApiUrl(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&language=ko-KR&page=1`);
  }, [inputValue]); // inputValue가 변경될 때마다 useEffect가 실행됨

  const fetchMovies = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmVlZGRhMThlMmY0NTAzOGY1MmVjNDQxYmQwOTM4YSIsInN1YiI6IjY1MWI4ZTk2ZWE4NGM3MDBjYTA4ZjQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sNnNvL2jG6nIab1geOL80XpiER7lidZTiXod6aFCR5Q'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
      } else {
        console.error('Failed to fetch movies');
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  return (
    <InputContainer>
      <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {inputValue && (
        <SearchResultContainer>
          {movies.map((movieData, index) => (
            <SearchResult key={index}>
              <MovieImage src={BASE_IMG_URL + movieData.backdrop_path} alt={movieData.title} />
              <ContentsContainer>
                <h2>{movieData.title}</h2>
                <p>평점: {movieData.vote_average}</p>
              </ContentsContainer>
            </SearchResult>
          ))}
        </SearchResultContainer>
      )}
    </InputContainer>
  );
}

export default SearchPage;
