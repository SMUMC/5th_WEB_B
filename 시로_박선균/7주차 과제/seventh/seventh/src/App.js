import './App.css';
import Nav from './components/nav/nav';
import {Routes,Route} from 'react-router-dom';
import RegisterPage from './components/register/registerPage';
import SearchPage from './components/search/searchPage';

function App() {
  return (
    <div className="App">

    </div>
  );
}

const AppRoutes = () => (
  <div>
    <Nav />
    <Routes>
      <Route path='/' element={<SearchPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
    </Routes>
  </div>
);

export default AppRoutes; 