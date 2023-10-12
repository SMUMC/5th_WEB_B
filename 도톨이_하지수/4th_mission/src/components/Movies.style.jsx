
import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color:#36517A; 
`;

export const MovieContainer = styled.div`
    position: relative; 
    width: 250px;
    margin: 15px;
    background-color: rgb(3, 37, 65);
    color: white;
    border-radius: 6px;
    overflow: hidden;
    
    img {
        max-width: 100%;
    }

    &:hover .hover-box {
        opacity: 1;
    }
`;

export const Hoverbox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s;

    p {
        text-align: center;
        padding: 20px;
        margin: 0;
        color: white;
        font-size: 14px;
    }
`;

export const MovieInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;

    h4 {
        margin: 0;
        font-wieght: 15px;
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
`;

export const NavbarWrap = styled.div`
    height: 64px;
    max-width:100%;
`;

export const NavbarRightWrap = styled.div`
    display: flex;  

    ul{
        display:flex;
    }
`;

export const NavbarItem = styled.div`
    display: flex;
    color: #ffff;
    font-size: 25px;
    font-weight: bold;
    margin: 0 10px;

`;