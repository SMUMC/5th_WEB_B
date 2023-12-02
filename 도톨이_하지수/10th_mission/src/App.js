import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Div } from "./style/App.style";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Div>
        <Login />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Div>
    </BrowserRouter>
  );
}
