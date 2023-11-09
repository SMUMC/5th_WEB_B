import React from "react";
import { useState, useEffect } from "react";
import HomeMovie from "./HomeMovie";
import {
  FindContainer,
  StyledInput,
  MovieBox,
  FindButton,
  StyledLabel,
  FindDiv,
} from "./Movies.style";

export default function Search() {
  const [find, setFind] = useState([]);
  const [search, setsearch] = useState("");
  const searchValue = (event) => {
    setsearch(event.target.value);
    console.log(search);
  };

  const findValue = useEffect(() => {
    const fetchData = async () => {
      try {
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
        setFind(data.results);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <FindDiv>
      <FindContainer>
        <StyledLabel> 📽 Find your movies 📽</StyledLabel>
        <StyledInput type="text" onChange={searchValue} />
        <FindButton onClick={findValue}> 찾기 </FindButton>
        <MovieBox>
          {find.map((item) => {
            return (
              <HomeMovie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            );
          })}
        </MovieBox>
      </FindContainer>
    </FindDiv>
  );
}
