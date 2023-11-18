import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Movie from "./movie";
import { Link } from "react-router-dom";


export default function Search() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (search.trim() === "") {
          setMovies([]);
          return;
        }

        const result = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=ko&page=1`,
          {
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWQwOGI0YzIzZWQ1NWQ0NWM5OTQzZTg1MmQ5OWE4ZSIsInN1YiI6IjY1MjM5OWI0ZWE4NGM3MDEwYzE4MWM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JOt6xCNHgNuBw2gnBkSgkMuER30G8kKGzjZmABeG-Aw",
            },
          }
        );

        if (!result.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await result.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search]);
 

  return (
    <FindDiv>
      <FindContainer>
        <StyledLabel>🎬 Find your movies 🍿</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={handleSearchChange}
        />
        {loading ? (
        <p>ㄱㄷ</p>
      ) : (
        <MovieBox>
          {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Movie
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              overview={movie.overview}
              cast={movie.cast} 
            />
            </Link>
          ))}
        </MovieBox>
      )}
      </FindContainer>
    </FindDiv>
  );
}
const FindDiv = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
`;
const FindContainer = styled.div`
  text-align: center;
  display: flex;
  align-items:center;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  display: block;
  color: white;
`;

const StyledInput = styled.input`
  padding: 10px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: transparent;
  color: white;
`;

const MovieBox = styled.div`
  display: grid;
  width: 70%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;