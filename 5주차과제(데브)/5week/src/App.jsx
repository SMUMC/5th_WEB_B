
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import'./index.css';
import Header from './components/header';
import Main from './components/main';
import Loading from './components/Loading';
import Footer from './components/footer';

import Popular from './components/popular';
import Nowplaying from './components/nowplaying';
import Toprated from './components/toprated';
import Upcoming from './components/upcoming';
import MovieInfo from './components/movieinfo';
function App() {
  const [loading,setLoading] = useState(true); 
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[]) 
   console.log("실행 안됨? ",loading);
  return (
    <Container>
       {loading ? <Loading/>:<>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/nowplaying" element={<Nowplaying/>}></Route>
          <Route path="/popular" element={<Popular/>}></Route>
          <Route path="/toprated" element={<Toprated/>}></Route>
          <Route path="/upcoming" element={<Upcoming/>}></Route>
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
        <Footer/>
      </>
      }
      
    </Container>
   
  );
}

const Container = styled.div`
min-width: 100%;

`
export default App;
