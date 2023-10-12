import React from "react";
import { NavbarContainer, LogoBox, NavbarItem, LinkPage } from "./Movies.style";

export default function Navbar() {
  return (
    <NavbarContainer>
      <LogoBox>
        <LinkPage to="/">
          <h1>MFlix</h1>
        </LinkPage>
      </LogoBox>
      <NavbarItem>
        <LinkPage to="/NowPlaying">
          <h1>Now Playing</h1>
        </LinkPage>
        <LinkPage to="/Popular">
          <h1>Popular</h1>
        </LinkPage>
        <LinkPage to="/TopRates">
          <h1>Top Rates</h1>
        </LinkPage>
        <LinkPage to="/Upcoming">
          <h1>Up Coming</h1>
        </LinkPage>
      </NavbarItem>
    </NavbarContainer>
  );
}
