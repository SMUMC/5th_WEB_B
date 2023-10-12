import styled from 'styled-components';
import Movie from './components/movie';
import { movies } from './movieDummy';
export default function App() {
    return (
    <div style= {{width:"100%",display:"flex",justifyContent:"center"}}>
      <AppContainer>
      {
        movies.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview} 
          />
    );
  })
}
      </AppContainer>
    </div>
  );
}
const AppContainer = styled.div`
margin-top:10px;
/* 화면 폭이 768px 이하일 때 */
@media (max-width: 768px) {

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:1rem;
  
}
@media (min-width: 768px) {
  
    display: grid;
    width: 85%;
    grid-template-columns: repeat(auto-fill, minmax(10%, 1fr)); /* 8개씩 반복, 반응형 설정 */
    gap: 1rem; /* 아이템 간격 조정 */
  
}


`