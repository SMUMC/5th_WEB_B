import React from 'react';
import { useState } from 'react';
import { MovieItem, MovieImage, MovieFooter, Overview, PStyling, PStylingOverview } from './movie.style';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

function TopRatedPage(props) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const [apiUrl, setApiUrl] = useState(
        `https://api.themoviedb.org/3/movie/${props.api_menu}?language=ko-KR&page=1`
    );

    useEffect(() => {
        setApiUrl(`https://api.themoviedb.org/3/movie/${props.api_menu}?language=ko-KR&page=1`);
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
        <MovieItem>
            <Link to={`/movie/${props.title}`} >
                <MovieImage image_URL={BASE_IMG_URL + props.imageSrc} />
            </Link>
            <MovieFooter>
                <PStyling>{props.title}</PStyling>
                <PStyling>{props.avg}</PStyling>
            </MovieFooter>
            <Overview className='overview'>
                <PStylingOverview>{props.detail}</PStylingOverview>
            </Overview>
        </MovieItem>
    );
}

export default TopRatedPage;