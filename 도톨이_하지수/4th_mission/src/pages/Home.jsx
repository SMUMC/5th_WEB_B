import React from "react";
import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import { AppContainer } from "../components/Movies.style";
import Loading from "../components/Loading";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=ko&page=1",
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

        console.log(movies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
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
              />
            );
          })}
        </AppContainer>
      )}
    </div>
  );
}
