
import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Context from "./context";
export default function Main() {
  return (
    <MainContainer>
       <Context/>
       <Footer/>
    </MainContainer>
  )
}
const MainContainer = styled.div`
  width:100%;
  display: flex;
  border-right:1px solid grey;
  justify-content: space-evenly;
`