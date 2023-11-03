import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import { AppContainer } from "../components/Movies.style";
import Loading from "../components/Loading";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=ko`,
          {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer <YOUR_API_KEY>",
            },
          }
        );

        if (!result.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await result.json();

        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <AppContainer>
          <Movie
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            overview={movie.overview}
          />
        </AppContainer>
      )}
    </div>
  );
}
