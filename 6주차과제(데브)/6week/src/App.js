import styled from 'styled-components';

import './index.css'

import Header from './components/header';
import CartList from './components/cartList';
function App() {
  return (
    <Container>
      <Header/>
      <H1>당신이 선택한 음반</H1>
      <ListContainer>
        <CartList/>

      </ListContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`

const ListContainer = styled.div`
width: 60%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const H1 = styled.h1`
margin-bottom:30px
`
