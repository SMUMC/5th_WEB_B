import React from 'react';
import { ListItem, NavContainer, UlContainer, IconList,StyledLink } from './nav.style'
import { useState } from 'react';
const Nav = (()=>{
    const [login, setlogin] = useState("로그인");

    function changeLogin() {
        setlogin(login === "로그인" ? "로그아웃" : "로그인");
    }

    return (
        <NavContainer>
            <IconList id='mark'><StyledLink to="/">MFlIX</StyledLink></IconList>
            
            <UlContainer>
                <ListItem><StyledLink to="/" onClick={changeLogin}>{login}</StyledLink></ListItem>

                <ListItem><StyledLink to="/popular">Popular</StyledLink></ListItem>
                <ListItem><StyledLink to="/nowplaying">Now Playing</StyledLink></ListItem>
                <ListItem><StyledLink to="/top-rated">Top Rated</StyledLink></ListItem>
                <ListItem><StyledLink to="/upcoming">Upcoming</StyledLink></ListItem>
            </UlContainer>
        </NavContainer>
    )
})

export default Nav