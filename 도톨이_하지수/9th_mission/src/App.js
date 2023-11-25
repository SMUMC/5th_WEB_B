import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootWarp } from "./style/Ect.style";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRates from "./pages/TopRates";
import UpComing from "./pages/UpComing";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <RootWarp>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NowPlaying" element={<NowPlaying />} />
          <Route path="/Popular" element={<Popular />} />
          <Route path="/TopRates" element={<TopRates />} />
          <Route path="/UpComing" element={<UpComing />} />

          <Route path="/*" element={<NotFound />} />

          <Route path="/MovieDetail/:movieId" element={<MovieDetail />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </RootWarp>
  );
}
