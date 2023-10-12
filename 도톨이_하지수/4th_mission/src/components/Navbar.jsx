import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarContainer, NavbarWrap, NavbarRightWrap, NavbarItem } from './Movies.style';

export default function Navbar(){
    return(
        <div>
            <NavbarContainer>
                <NavbarWrap>
                    <NavbarRightWrap>
                        <ul>
                            <NavbarItem>
                            <Link to="/">
                                MFlix
                            </Link>
                            </NavbarItem>    
                            <NavbarItem>
                            <Link to="/NowPlaying">
                                Now Playing
                            </Link>
                            </NavbarItem>
                            <NavbarItem>
                            <Link to="/Popular">
                                Popular
                            </Link>
                            </NavbarItem>
                            <NavbarItem>
                            <Link  to="/TopRates">
                                Top Rates
                            </Link>
                            </NavbarItem>
                            <NavbarItem>
                            <Link to="/Upcoming">
                                Up Coming
                            </Link>        
                            </NavbarItem>
                        </ul>
                    </NavbarRightWrap>
                </NavbarWrap>
            </NavbarContainer>
        </div>
    );
}
