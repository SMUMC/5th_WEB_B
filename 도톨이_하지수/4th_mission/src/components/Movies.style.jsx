import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  place-items: center;
  background-color: #36517a;
`;

export const MovieContainer = styled.div`
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
  max-width: 100%;
  display: flex;
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
