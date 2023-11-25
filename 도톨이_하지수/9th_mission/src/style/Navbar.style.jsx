import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  background-color: rgb(3, 37, 65);
  height: 128px;
  max-width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const LogoBox = styled.div`
  text-decoration: none;
`;

export const NavbarItem = styled.div`
  display: flex;
  justify-content: left;
  gap: 15px;
  font-weight: bold;

  h1 {
    font-size: 20px;
    color: white;
  }
`;

export const Button = styled.button`
  display: flex;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  margin-top: 13.5px;
  color: white;
`;

export const LinkPage = styled(Link)`
  color: yellow;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;
