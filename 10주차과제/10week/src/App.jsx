import React from 'react';
import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components';

import Main from './components/main';
import Signup from './sign/sign-up';
import MakeList from './components/makeList';
import Header from './components/header';


function App() {
  return (
    <AppContainer>
      <Header/>
      <ChakraProvider>
        <Routes>
          <Route path='/' element ={<Main/>}></Route>
          <Route path='/signup' element ={<Signup/>}></Route>
          <Route path='/makelist' element ={<MakeList/>}></Route>


        </Routes>
      </ChakraProvider>
      
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
export default App;
