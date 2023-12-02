import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 30px;
  border-bottom: 1px solid black;

  h1 {
    font-size: 23px;
  }

  h2 {
    font-size: 18px;
  }
`;

export const LinkPage = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 15px;
`;

export const Span = styled.div`
  color: gray;
  text-decoration: none;
  margin: 15px;
`;
