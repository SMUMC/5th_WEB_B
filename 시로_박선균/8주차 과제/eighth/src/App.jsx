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

function App(props) {
  return (
    <>  </>
  );
}

const AppRoutes = () => (
  <div>
    <Nav />
    <Routes>
      <Route path='/' element={<SearchPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path='/popular' element={<PopularPage/>} />
      <Route path='/nowplaying' element={<NowPlayingPage/>} />
      <Route path='/top-rated' element={<TopRatedPage/>} />
      <Route path='/upcoming' element={<UpComing />} />
      <Route path = '/movie/:id' element={<MovieDetail/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
      <Route path="/weather" element = {<WeatherPage/>}/>
    </Routes>
    <Footer />
  </div>
);

export default AppRoutes; 