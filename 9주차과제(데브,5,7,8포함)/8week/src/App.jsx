
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
import Sign_Up from './sign-up/main_page';
import Search from './components/search';
import Login from './mission1-frontcode/login';
import Banner from './components/banner';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading,setLoading] = useState(true); 
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[]) 
  const handleLoginChange = (loginStatus) => {
    setIsLogin(loginStatus);
  };
  

  return (
    <Container>
       {loading ? <Loading/>:<>
        <Header isLogin={isLogin} onLoginChange={handleLoginChange} />
        <Banner/>
        <Routes>
          <Route path="/" element={<Search/>}></Route>
          <Route path="/nowplaying" element={<Nowplaying/>}></Route>
          <Route path="/popular" element={<Popular/>}></Route>
          <Route path="/toprated" element={<Toprated/>}></Route>
          <Route path="/upcoming" element={<Upcoming/>}></Route>
          <Route path="/sign-up" element={<Sign_Up />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
      </>
      }
      <Footer/>
    </Container>
   
  );
}

const Container = styled.div`
min-width: 100%;
min-height: 100vh;

`

const Navbar = styled.div`
  background-color: black;
  width: 100vw;
  height: 30vh;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default App;
