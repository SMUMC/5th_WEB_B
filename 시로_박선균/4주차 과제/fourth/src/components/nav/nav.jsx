import React from 'react';
import { ListItem, NavContainer, UlContainer, IconList,StyledLink } from './nav.style'
const Nav = (()=>{
    return (
        <NavContainer>
            <IconList id='mark'><StyledLink to="/">MFlIX</StyledLink></IconList>
            <UlContainer>
                <ListItem><StyledLink to="/popular">Popular</StyledLink></ListItem>
                <ListItem><StyledLink to="/nowplaying">Now Playing</StyledLink></ListItem>
                <ListItem><StyledLink to="/top-rated">Top Rated</StyledLink></ListItem>
                <ListItem><StyledLink to="/upcoming">Upcoming</StyledLink></ListItem>
            </UlContainer>
        </NavContainer>
    )
})

export default Nav