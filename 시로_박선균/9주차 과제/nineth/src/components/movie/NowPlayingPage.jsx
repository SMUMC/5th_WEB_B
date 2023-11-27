import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './movie';
import { MoviesContainer } from './movie.style';

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
const apikey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmVlZGRhMThlMmY0NTAzOGY1MmVjNDQxYmQwOTM4YSIsInN1YiI6IjY1MWI4ZTk2ZWE4NGM3MDBjYTA4ZjQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sNnNvL2jG6nIab1geOL80XpiER7lidZTiXod6aFCR5Q"

function NowPlayingPage() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchMovies = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=${page}`,
                {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${apikey}`
                    }
                }
            );

            setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error('영화 목록을 불러오는 중 에러 발생:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight && !loading) {
            // 페이지 끝에 도달하고 로딩 중이 아닐 때 추가 데이터를 받아온다
            fetchMovies();
        }
    };

    useEffect(() => {
        // 초기 로딩 시에만 호출되도록 변경
        if (!movies.length) {
            fetchMovies();
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [movies, loading]);

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

export default NowPlayingPage;
