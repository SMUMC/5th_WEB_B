import React, { useEffect, useState } from 'react';
import { MoviesContainer } from './components/movie/movie.style';
import Movie from './components/movie/movie';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer'
import MovieDetail from './components/movie/movieDetail';
import PageNotFound from './components/error/pageNotFound';
import NowPlayingPage from './components/movie/NowPlayingPage';
import UpComing from './components/movie/UpComing';
import TopRatedPage from './components/movie/TopRatedPage';
import PopularPage from './components/movie/PopularPage';
import MainPage from './components/movie/MainPage';
import RegisterPage from './components/register/registerPage';
import SearchPage from './components/search/searchPage';
import WeatherPage from './components/weather/weatherPage';
import LoginPage from './components/login/login';
import LogoutPage from './components/logout/logout';
import { AppContainer } from './components/footer/footer.style';

function App(props) {
  return (
    <>  </>
  );
}

const AppRoutes = () => (
  <AppContainer>
    <Nav />
    <Routes>
      <Route path='/' element={<SearchPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path='/popular/:id' element={<PopularPage/>} />
      <Route path='/nowplaying' element={<NowPlayingPage/>} />
      <Route path='/top-rated' element={<TopRatedPage/>} />
      <Route path='/upcoming' element={<UpComing />} />
      <Route path = '/movie/:id' element={<MovieDetail/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
      <Route path="/weather" element = {<WeatherPage/>}/>
      <Route path="/login" element = {<LoginPage/>}/>
      <Route path="/logout" element={<LogoutPage />} />
    </Routes>
    {/* <Footer /> */}
  </AppContainer>
);

export default AppRoutes; 