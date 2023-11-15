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


function App(props) {
  const [movies, setMovies] = useState([]);
  const [loading,setLoading] = useState(false);
  
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/movie/${props.api_menu}?language=ko-KR&page=1`
  );

  useEffect(() => {
    setApiUrl(`https://api.themoviedb.org/3/movie/${props.api_menu}?language=ko-KR&page=1`);
    fetchMovies();
  }, [props.api_menu]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmVlZGRhMThlMmY0NTAzOGY1MmVjNDQxYmQwOTM4YSIsInN1YiI6IjY1MWI4ZTk2ZWE4NGM3MDBjYTA4ZjQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sNnNvL2jG6nIab1geOL80XpiER7lidZTiXod6aFCR5Q'
       }
      });

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
      } else {
        console.error('Failed to fetch movies');
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <MoviesContainer>
      {movies.map((movieData) => (
        <MainPage
          key={movieData.id}
          imageSrc={movieData.backdrop_path}
          detail={movieData.overview}
          title={movieData.title}
          avg={movieData.vote_average}
        />
      ))}
    </MoviesContainer>
  );
}

const AppRoutes = () => (
  <div>
    <Nav />
    <Routes>
      <Route path='/' element={<App api_menu="top_rated" />} />
      <Route path='/popular' element={<App api_menu="popular" />} />
      <Route path='/nowplaying' element={<App api_menu="now_playing" />} />
      <Route path='/top-rated' element={<App api_menu="top_rated" />} />
      <Route path='/upcoming' element={<App api_menu="upcoming" />} />
      <Route path = '/movie/:title' element={<MovieDetail/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
      {/* <Routes>
      <Route path='/' element={<App api_menu="top_rated" />} />
      <Route path='/popular' element={<App api_menu="popular" />} />
      <Route path='/nowplaying' element={<App api_menu="now_playing" />} />
      <Route path='/top-rated' element={<App api_menu="top_rated" />} />
      <Route path='/upcoming' element={<App api_menu="upcoming" />} />
      <Route path = '/movie/:title' element={<MovieDetail/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes> */}
    </Routes>
    <Footer />
  </div>
);

export default AppRoutes; 