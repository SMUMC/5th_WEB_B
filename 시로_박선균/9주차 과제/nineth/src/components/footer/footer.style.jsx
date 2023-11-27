// footer.style.js
import styled from 'styled-components';

export const AppContainer = styled.div`
    position: relative;
    min-height: 100vh;
`;

export const ContentContainer = styled.div`
    padding-bottom: 10vh; /* Adjust the padding to accommodate the footer height */
`;

export const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: rgba(94, 96, 171, 0.635);
`;
