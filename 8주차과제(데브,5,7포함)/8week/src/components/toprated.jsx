import React from 'react';
import ReuseMovie from './reusemovie';
import styled from 'styled-components';

function Toprated() {
  const apiUrlToprated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'; // Popular API URL


  return (
    <Container>
      <ReuseMovie apiUrl={apiUrlToprated}/> {/* NowPlaying 컴포넌트를 Popular에서 사용 */}
    </Container>
  );
}

const Container= styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`
export default Toprated;