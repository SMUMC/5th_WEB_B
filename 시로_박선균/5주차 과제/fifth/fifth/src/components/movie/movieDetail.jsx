import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, WrapContainer, ImageContainer, Image, ContextContainer, PStyling, H1Styling, StarContainer, Loading } from './movieDetail.style';
const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetail(props) {
    const [movie, setMovie] = useState(null);
    const params = useParams();
    const [count,setCount] = useState(0);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${params.title}&language=ko-KR`;

            try {
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        accept : 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmVlZGRhMThlMmY0NTAzOGY1MmVjNDQxYmQwOTM4YSIsInN1YiI6IjY1MWI4ZTk2ZWE4NGM3MDBjYTA4ZjQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sNnNvL2jG6nIab1geOL80XpiER7lidZTiXod6aFCR5Q'
       }
                });

                if (response.ok) {
                    const data = await response.json();
                    setMovie(data.results[0]);
                    let tmpCount = data.results[0].vote_average;
                    let roundedCount = Math.floor(tmpCount);
                    console.log(roundedCount); // 내림된 값 출력
                    setCount(roundedCount);
               } else {
                    console.error('Failed to fetch movie');
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovieDetail();
    }, [params.title]);

    if (!movie) {
        return <Loading>Loading...</Loading>;
    }
    return (
        <Container>
        <WrapContainer>
            <ImageContainer><Image src={`${BASE_IMG_URL}${movie.poster_path}`} alt={movie.title} /></ImageContainer>
            <ContextContainer> 
                    <H1Styling>{movie.title}</H1Styling>
                    <PStyling>평점 :     <StarContainer count="5" boxColor="gold">{'★'.repeat(count)}</StarContainer></PStyling>
                    <PStyling>줄거리</PStyling>
                    {movie.overview ? movie.overview : "줄거리가 없습니다."}
            </ContextContainer>
        </WrapContainer>
        </Container>
    );
}

export default MovieDetail;
