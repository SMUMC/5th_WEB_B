import React, { useState, useEffect } from 'react';
import { StyledLink, PageInfo, PageButton, MoviesContainer, PageNationContainer } from './movie.style';
import { Link, useParams } from 'react-router-dom';
import Movie from './movie';

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

function PopularPage(props) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const param = useParams();
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [totalPages, setTotalPages] = useState(10); // 총 페이지 수

    useEffect(() => {
        fetchMovies();
    }, [param.id]);

    const fetchMovies = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${param.id || currentPage}`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmVlZGRhMThlMmY0NTAzOGY1MmVjNDQxYmQwOTM4YSIsInN1YiI6IjY1MWI4ZTk2ZWE4NGM3MDBjYTA4ZjQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sNnNvL2jG6nIab1geOL80XpiER7lidZTiXod6aFCR5Q'
                    }
                }
            );

            if (response.ok) {
                const data = await response.json();
                setMovies(data.results);
                setTotalPages(data.total_pages);
                setCurrentPage(parseInt(param.id))
            } else {
                console.error('Failed to fetch movies');
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <>
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

            <PageNationContainer>
                <StyledLink to={`/popular/${currentPage - 1}`} disabled={currentPage === 1}>
                    <PageButton>이전 페이지</PageButton>
                </StyledLink>
                <PageInfo>{currentPage}</PageInfo>
                <StyledLink to={`/popular/${currentPage + 1}`} disabled={currentPage === totalPages}>
                    <PageButton>다음 페이지</PageButton>
                </StyledLink>
            </PageNationContainer>
        </>
    );
}

export default PopularPage;
