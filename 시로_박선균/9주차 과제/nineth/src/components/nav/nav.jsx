import React from 'react';
import { ListItem, NavContainer, UlContainer, IconList, StyledLink } from './nav.style';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Nav = (() => {
    const token = useSelector((state) => state.user.userInfo.token);

    return (
        <NavContainer>
            <IconList id='mark'><StyledLink to="/">MFlIX</StyledLink></IconList>

            <UlContainer>
                {!token && <ListItem><StyledLink to="/login">로그인</StyledLink></ListItem>}
                {!token && <ListItem><StyledLink to="/register">회원가입</StyledLink></ListItem>}
                {token && <ListItem><StyledLink to="/logout">로그아웃</StyledLink></ListItem>}
                <ListItem><StyledLink to="/popular/1">Popular</StyledLink></ListItem>
                <ListItem><StyledLink to="/nowplaying">Now Playing</StyledLink></ListItem>
                <ListItem><StyledLink to="/top-rated">Top Rated</StyledLink></ListItem>
                <ListItem><StyledLink to="/upcoming">Upcoming</StyledLink></ListItem>
            </UlContainer>
        </NavContainer>
    );
});

export default Nav;