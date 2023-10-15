import React from 'react'; 
import {Rings} from "react-loader-spinner"; 
import styled from 'styled-components';
function Loading () { 

    return (
    <Container>
        
        <Rings
        color="#ff0000" 
        height={100} 
        width={100} 
        />
        <br />
        <h1 style={{color:"white", fontSize:"33px"}}>잠시만 기다려주세요..!</h1>
     </Container>
    ) ; 
}; 
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.9);
`

    export default Loading;

