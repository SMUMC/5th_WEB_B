import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
    ListContainer,
Container, WrapContainer, ImageContainer, Image, ContextContainer, PStyling, H1Styling, StarContainer, Loading
,} from './movieDetail.style';
import CastInfoPage from './CastInfoPage';

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetail(props) {
    const [movie, setMovie] = useState(null);
    const params = useParams();
    const [count, setCount] = useState(0);
    const [actors,setActors] = useState([]);
    const [directors,setDirectors] = useState([]);
    

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const movieApiUrl = `https://api.themoviedb.org/3/movie/${params.id}?language=ko-KR`;
            const apiCastUrl = `https://api.themoviedb.org/3/movie/${params.id}/credits?language=ko-KR`;

            try {
                // Fetch movie details
                const movieResponse = await fetch(movieApiUrl, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmVlZGRhMThlMmY0NTAzOGY1MmVjNDQxYmQwOTM4YSIsInN1YiI6IjY1MWI4ZTk2ZWE4NGM3MDBjYTA4ZjQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sNnNvL2jG6nIab1geOL80XpiER7lidZTiXod6aFCR5Q',
                    },
                });

                if (movieResponse.ok) {
                    const movieData = await movieResponse.json();

                    // Fetch cast details
                    const castResponse = await fetch(apiCastUrl, {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmVlZGRhMThlMmY0NTAzOGY1MmVjNDQxYmQwOTM4YSIsInN1YiI6IjY1MWI4ZTk2ZWE4NGM3MDBjYTA4ZjQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sNnNvL2jG6nIab1geOL80XpiER7lidZTiXod6aFCR5Q',
                        },
                    });

                    if (castResponse.ok) {
                        const castData = await castResponse.json();

                        const combinedData = {
                            ...movieData,
                            cast: castData.cast,
                        };

                        let tmpCount = combinedData.vote_average;
                        let roundedCount = Math.floor(tmpCount);
                        let fetchActor = combinedData.cast.filter((cast) => cast.known_for_department === "Acting");
                        let fetchDirector = combinedData.cast.filter((cast) => cast.known_for_department === "Directing");

                        setMovie(combinedData);
                        setCount(roundedCount);
                        setActors(fetchActor);
                        setDirectors(fetchDirector);


                    } else {
                        console.error('Failed to fetch cast');
                    }
                } else {
                    console.error('Failed to fetch movie');
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovieDetail();
    }, [params.id]);

    if (!movie) {
        return <Loading>Loading...</Loading>;
    }
    return (
        <Container>
            <WrapContainer>
                <ImageContainer><Image src={`${BASE_IMG_URL}${movie.poster_path}`} alt={movie.title} /></ImageContainer>
                <ContextContainer>
                    <H1Styling>{movie.title}</H1Styling>
                    <PStyling>평점 :     <StarContainer count="5">{'★'.repeat(count)}</StarContainer></PStyling>
                    <PStyling>줄거리</PStyling>
                    {movie.overview ? movie.overview : "줄거리가 없습니다."}
                    {/* 추가된 부분: 배우 정보 표시 */}
        {/* 주연 배우 표시 */}
        <PStyling>주연 배우</PStyling>
        <ListContainer>
          {actors.map(actor => (
            <CastInfoPage cast={actor}/>
          ))}
        </ListContainer>

        {/* 주연 감독 표시 */}
        <PStyling>주연 감독</PStyling>
        <ListContainer>
          {directors.map(director => (
            <CastInfoPage cast={director}/>
          ))}
        </ListContainer>
                </ContextContainer>
            </WrapContainer>
        </Container>
    );
}

export default MovieDetail;