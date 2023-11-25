import React from "react";
import Movie from "../components/Movie";
import { AppContainer, Button, ButtonContainer } from "../style/Page.style";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

export default function Popular() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [btn, setBtn] = useState(true);

  const pageDown = () => {
    setPage((prevPage) => prevPage - 1);

    if (page <= 2) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };

  const pageUp = () => {
    setPage((prevPage) => prevPage + 1);

    if (page >= 1) {
      setBtn(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${page}`,

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

        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <AppContainer>
        {loading ? (
          <Loading />
        ) : (
          <AppContainer>
            {movies.map((item) => {
              return (
                <Movie
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  overview={item.overview}
                  movieId={item.id}
                />
              );
            })}
          </AppContainer>
        )}
      </AppContainer>
      <ButtonContainer>
        <Button disabled={btn} onClick={pageDown}>
          이전페이지
        </Button>
        <h3>현재페이지: {page}</h3>
        <Button onClick={pageUp}>다음페이지</Button>
      </ButtonContainer>
    </div>
  );
}
