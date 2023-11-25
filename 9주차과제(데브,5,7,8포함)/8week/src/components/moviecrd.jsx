import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useDrag from './jimin-swiper';
function MovieCrd() {

  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  const {
    containerRef: castContainerRef,
    isDragging: isCastDragging,
    handleMouseDown: handleCastMouseDown,
    handleMouseMove: handleCastMouseMove,
    handleMouseUp: handleCastMouseUp,
    handleDragStart: handleCastDragStart,
  } = useDrag();

  const {
    containerRef: crewContainerRef,
    isDragging: isCrewDragging,
    handleMouseDown: handleCrewMouseDown,
    handleMouseMove: handleCrewMouseMove,
    handleMouseUp: handleCrewMouseUp,
    handleDragStart: handleCrewDragStart,
  } = useDrag();

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=ko`;

    const fetchMovieInfo = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmM2ODZkMDdhMTcxNDUyZWUyYzM2MGUwODFjNjAxMyIsInN1YiI6IjY0NzRjMGFhNWNkMTZlMDBiZjEyNDQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgYpZS6S6GHYU8eq2rRevqoZz5g80tZ7hZ5KJ3soHVU ',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMovieInfo(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieInfo();
  }, [id]);
  
  return (
    <Container>
      {movieInfo && (
        <>
          <h1>{movieInfo.title}</h1>
          {/* Add the rest of your movie details output */}
          <h2>출연진</h2>
          <Ul ref={castContainerRef} onMouseDown={handleCastMouseDown} onMouseMove={handleCastMouseMove} onMouseUp={handleCastMouseUp} onDragStart={handleCastDragStart}>
          
            {movieInfo?.cast?.map(actor => (
              <Li key={actor.id}>
                {(actor.profile_path !==null) ? 
                <ActorImage src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt="" />
                :<ActorImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"} alt="" />
                }
                
                <p>{actor.name}</p>
              </Li>
            ))}
          </Ul>
          <h2>감독진</h2>
          <Ul ref={crewContainerRef} onMouseDown={handleCrewMouseDown} onMouseMove={handleCrewMouseMove} onMouseUp={handleCrewMouseUp} onDragStart={handleCrewDragStart}>
            {movieInfo?.crew?.map((actor, index) => (
              <Li key={`${actor.id}-${index}`}>
                {(actor.profile_path !==null) ? 
                <ActorImage src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt="" />
                :<ActorImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"} alt="" />
                }
                
                <p>{actor.name}</p>
              </Li>
            ))}
          </Ul>
        </>
      )}
    
    </Container>
  );
}
const Container = styled.div`
  color: white;
  width: 100%;
  /* Additional styling */
`;
const ActorImage = styled.img`
  width: 100px;
  height: 70px;
  border-radius: 50%;
`;
const Li = styled.li`
display: grid;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-right: 20px;
`
const Ul = styled.ul`
    display: flex;;
    padding: 0px;
    margin: 0px;
    color: white;
    font-size: 10px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid white;
  }
`
export default MovieCrd;
