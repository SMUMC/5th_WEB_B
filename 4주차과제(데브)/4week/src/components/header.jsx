import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Header(){
    
    return(
        <ContainingHeader>
            <StyledHeader >  
                <StyledLink to="/popular" style={{textDecoration:"none"}}>
                   <StyledTitle >MFlix</StyledTitle>  
                </StyledLink>
                <HeaderMenu>
                    <StyledLink to="/popular" style={{textDecoration:"none"}}>
                        <StyledMenu>Popular</StyledMenu>  
                    </StyledLink>
                    <StyledLink to="/nowplaying" style={{textDecoration:"none"}}>
                        <StyledMenu >Now Playing</StyledMenu>  
                    </StyledLink>
                    <StyledLink to="/toprated" style={{textDecoration:"none"}}>
                        <StyledMenu >Top Rated</StyledMenu>  
                    </StyledLink>
                    <StyledLink to="/upcoming" style={{textDecoration:"none"}}>
                        <StyledMenu >Upcoming</StyledMenu>  
                    </StyledLink>
                </HeaderMenu>
            </StyledHeader>
        </ContainingHeader>
    );
}

const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-right: 20px;
    align-items: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`
const StyledHeader = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    z-index: 4;
    justify-content: space-between;
    background:linear-gradient(120deg, #000000 10% ,#dda2e86c 5%,#ffffff );
    
`
const StyledMenu = styled.h2`
    color: #cf2bd2;
    font-size: 14px;
    padding-left: 20px;
    &:hover {
        font-size: 17px;
    }
`

const ContainingHeader= styled.div`
    width : 100%;
    height: 45px;
    position: sticky;
    border-bottom: 1px solid black;
    border-color: gray;
    top: 0px;
    background-color: black;
    z-index: 3;
    margin: 0;
`
const StyledTitle = styled.h1`
    background: linear-gradient(120deg,#d314fe 45%,#d8c4db 75%,#d92b68 85%,#ffffff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 25px;
    padding-left:20px;
`

export default Header;
