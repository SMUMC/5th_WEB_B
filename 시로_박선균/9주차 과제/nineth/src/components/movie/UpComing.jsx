import React from 'react';
import { useState } from 'react';
import { MovieItem, MovieImage, MovieFooter, Overview, PStyling, PStylingOverview } from './movie.style';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import Movie from './movie';
import { MoviesContainer } from './movie.style';

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

function UpComing(props) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const [apiUrl, setApiUrl] = useState(
        `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1`
    );

    useEffect(() => {
        setApiUrl(`https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1`);
        fetchMovies();
    }, [props.api_menu]);

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
        <MoviesContainer>
        {movies.map((movieData) => (
          <Movie
            key={movieData.id}
            imageSrc={movieData.backdrop_path}
            detail={movieData.overview}
            title={movieData.title}
            avg={movieData.vote_average}
            id={movieData.id}
          />
        ))}
      </MoviesContainer>
    );
}

export default UpComing;