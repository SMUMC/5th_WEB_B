// Footer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { AppContainer, FooterContainer } from './footer.style';

const Footer = () => {
    let { id } = useParams();
    console.log(id);
    return (
            <FooterContainer>
                <h1>상명대 UMC 화이팅</h1>
            </FooterContainer>
    );
};

export default Footer;
