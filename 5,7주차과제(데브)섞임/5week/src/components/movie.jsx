import React, { useState } from "react"; // useState 추가
import styled from "styled-components";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [isHovered, setIsHovered] = useState(false); // 마우스 호버 상태를 관리하기 위한 상태 추가

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MovieImage src={IMG_BASE_URL + poster_path} alt="데이터 전송 실패" />
      
      <HoveredBox>
        {isHovered && (
          <div>
            <h4 style={{padding:"5px"}}>{title}</h4> 
            <P>{overview}</P>
          </div>
        )}
      </HoveredBox>

      <MovieInfo>
        <H4>{title}</H4>
        <Span>{vote_average}</Span>
        
      </MovieInfo>
    </Container>
  );
}

const MovieInfo = styled.div`
    display: flex;
    position:relative;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 20%;
`

const HoveredBox = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.7);
opacity: 0; /* 초기에는 숨김 */
display: flex;
justify-content: center;
align-items: flex-start;
`

const Container = styled.div`
position: relative; 
background: linear-gradient(240deg, #dfa0de,#9021bf44 80%);
height:40vh;
gap:1rem;
color: white;
border-radius: 5px;
overflow:hidden;
&:hover ${HoveredBox} {
    opacity: 1;
  }
  @media (max-width: 1200px) {
    width: 120px;


  }
`

const MovieImage = styled.img`
    min-width: 100%;
    height: 80%;
`

const P = styled.p`
    padding: 0;
    margin: 0;
    color: white;
    font-size: 10px;
    padding: 5px;
    height: 90px;
    overflow: scroll;
    overflow-x: hidden;
`;

const H4 = styled.h4`
    font-size:10px;
`

const Span = styled.span`
font-size:12px;
`