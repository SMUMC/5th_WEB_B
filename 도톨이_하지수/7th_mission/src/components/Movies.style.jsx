import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
  position: relative;
  display: grid;
  background-color: #36517a;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
`;

export const MovieContainer = styled.div`
  position: relative;
  width: 230px;
  margin: 15px;
  background-color: rgb(3, 37, 65);
  border-radius: 6px;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Hoverbox = styled.div`
  position: absolute;
  height: 100%;
  padding: 10px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);

  h1 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  p {
    display: block;
    height: 100%;
    color: white;
    max-height: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px 0 20px 0;
  margin: 0 20px;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    font-weight: 15px;
    color: white;
  }

  span {
    color: white;
  }
`;

export const RootWarp = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`;

export const NavbarContainer = styled.div`
  background-color: rgb(3, 37, 65);
  height: 128px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
`;

export const LogoBox = styled.div`
  text-decoration: none;
`;

export const LinkPage = styled(Link)`
  color: yellow;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavbarItem = styled.div`
  display: flex;
  gap: 28px;
  font-weight: bold;

  h1 {
    color: white;
  }
`;

export const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#E50915",
  textAlign: "center",
};

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
`;

export const Button = styled.div`
  background-color: transparent;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Banner = styled.div`
  background-color: rgba(1, 1, 1, 0.5);
  text-align: center;
  color: white;
  font-size: 30px;
  width: 100%;
  height: 130px;
  margin: 0;
`;

export const DetailContext = styled.div`
  margin: 60px;

  h1 {
    font-size: 55px;
  }

  h2 {
    font-size: 40px;
    display: grid;
    gap: 4px;
  }

  h3 {
    font-size: 30px;
  }
`;

export const DetailImg = styled.img`
  margin: 50px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gray;
  margin: 1%;
  width: 98%;
  height: 95%;
  border-radius: 10px;
`;

export const NotfoundContainer = styled.div`
  text-align: center;

  h1 {
    padding: 0;
    font-weight: bold;
    font-size: 45px;
  }
  h2 {
    text-decoration: underline;
    font-size: 35px;
    color: black;
  }

  h3 {
    font-size: 30px;
    color: red;
  }
`;

// Search .style
export const FindDiv = styled.div`
  display: flex;
  background-color: #36517a;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FindContainer = styled.div``;

export const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  font-size: 40px;
  margin: 15px;
  color: white;
`;
export const StyledInput = styled.input`
  width: 500px;
  height: 50px;
  margin: 12px 0px 5px 0px;
  border-radius: 10px;
`;

export const MovieBox = styled.div`
  display: none;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  place-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffff59;
  }
  width: 1500px;
  height: 1000px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 30px 0 50px 0;
`;

// Home.style

export const HomeContainer = styled.div`
  display: block;
  background-color: #36517a;
  height: 100%;
  width: 100%;
`;

export const HomeMovieDiv = styled.div`
  height: 100%;
  width: 100%;
`;

export const HomeMovieContainer = styled.div`
  position: relative;
  width: 250px;
  margin: 15px;
  background-color: rgb(3, 37, 65);
  border-radius: 6px;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const HomeMovieInfo = styled.div`
  display: flex;
  padding: 20px 0 20px 0;
  margin: 0 20px;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    font-weight: 15px;
    color: white;
  }

  span {
    color: white;
  }
`;

export const HomeImg = styled.img``;

export const HomeDiv = styled.div``;

// Login style
export const LoginContainer = styled.form`
  display: flex;
  background-color: #36517a;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: rgb(255, 255, 255);

  h1 {
    text-align: center;
    font-size: 45px;
  }
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: bold;
  font-size: 25px;
  margin: 8px;
`;

export const Mes = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: red;
`;

export const Input = styled.input`
  width: 500px;
  height: 40px;
  margin: 8px 0px 5px 0px;
  border-radius: 10px;
`;

export const LoginButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
