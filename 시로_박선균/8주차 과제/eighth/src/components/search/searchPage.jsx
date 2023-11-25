import React, { useState, useEffect } from "react";
import { StyledLink,PStyling, H1Styling, StarContainer, InputContainer, Input, SearchResultContainer, SearchResult, MovieImage, ContentsContainer } from './searchPage.style';
import useDebounce from "../movie/useDebounce";
  
function SearchPage() {
  const [inputValue, setInputValue] = useState('');
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const [apiUrl, setApiUrl] = useState(`https://api.themoviedb.org/3/search/keyword?query=language=ko-KR&page=1`);
  const [count, setCount] = useState(0);

  const debouncedInputValue = useDebounce(inputValue, 300); // Adjust the delay as needed

  useEffect(() => {
    setApiUrl(`https://api.themoviedb.org/3/search/movie?query=${debouncedInputValue}&language=ko-KR&page=1`);
  }, [debouncedInputValue]);

  useEffect(() => {
    fetchMovies();
  }, [apiUrl]);

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
        let tmpCount = data.results[0].vote_average;
        console.log(tmpCount);
        let roundedCount = Math.floor(tmpCount);
        console.log(roundedCount);
        setCount(roundedCount);
        console.log("asdasd",typeof count);

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
      {debouncedInputValue && (
        <SearchResultContainer>
          {movies.map((movieData, index) => (
            <StyledLink key={index} to={`/movie/${movieData.id}`}> {/* 각 이미지에 Link 추가 */}
            <SearchResult>
              <MovieImage src={BASE_IMG_URL + movieData.backdrop_path} alt={movieData.title} />
              <ContentsContainer>
                <PStyling>제목 : {movieData.title}</PStyling>
                <PStyling>평점 : <StarContainer boxColor="gold">{'★'.repeat(parseInt(count))}</StarContainer></PStyling>
              </ContentsContainer>
            </SearchResult>
            </StyledLink>
          ))}
        </SearchResultContainer>
      )}
    </InputContainer>
  );
}

export default SearchPage;
