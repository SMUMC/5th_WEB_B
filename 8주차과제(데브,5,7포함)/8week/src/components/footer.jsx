import React from "react";
import styled from 'styled-components';


function Footer(){
    
    return(
        <ContainingFooter>
            <H2>상명대 UMC WEB팀 화이팅!!!</H2>
        </ContainingFooter>
    );
}



const ContainingFooter= styled.div`
    width : 100%;
    height: 50px;
    position: relative;
    text-align: center;
    bottom: 0px;
    background-color: black;
    z-index: 3;
    margin: 0;
`
const H2 = styled.h2`
    color: white;
    font-size: 17px;
`
export default Footer;