import React from 'react';
import ReuseMovie from './reusemovie';
import styled from 'styled-components';

function Nowplaying() {
  const apiUrlNowplaying = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'; // Popular API URL


  return (
    <Container>
      <ReuseMovie apiUrl={apiUrlNowplaying}/> {/* NowPlaying 컴포넌트를 Popular에서 사용 */}
    </Container>
  );
}

const Container= styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export default Nowplaying;