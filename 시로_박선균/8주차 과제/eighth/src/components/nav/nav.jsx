import React from 'react';
import { ListItem, NavContainer, UlContainer, IconList,StyledLink } from './nav.style'
import { useState } from 'react';
const Nav = (()=>{
    const [login, setlogin] = useState("회원가입");

    return (
        <NavContainer>
            <IconList id='mark'><StyledLink to="/">MFlIX</StyledLink></IconList>
            
            <UlContainer>
                <ListItem><StyledLink to="/register">{login}</StyledLink></ListItem>
                <ListItem><StyledLink to="/popular">Popular</StyledLink></ListItem>
                <ListItem><StyledLink to="/nowplaying">Now Playing</StyledLink></ListItem>
                <ListItem><StyledLink to="/top-rated">Top Rated</StyledLink></ListItem>
                <ListItem><StyledLink to="/upcoming">Upcoming</StyledLink></ListItem>
            </UlContainer>
        </NavContainer>
    )
})

export default Nav