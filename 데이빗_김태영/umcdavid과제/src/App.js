import React from 'react';
import Movie from './Movie'; 
import { movies } from './movieDummy';
import './App.css';

import Join from './Join';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Modal /> */}
      {/* <Join /> */}
      <Movie movies={movies} />
    </div>
  );
}

export default App;
