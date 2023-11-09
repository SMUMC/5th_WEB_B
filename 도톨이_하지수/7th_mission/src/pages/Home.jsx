import React from "react";
import { Banner, HomeContainer, HomeDiv } from "../components/Movies.style";
import Search from "../components/Search";

export default function Home() {
  return (
    <HomeContainer>
      <HomeDiv>
        <Banner>
          Break the Rules ! <br />
          WEB-A/B 파이팅 !! <br />
          SMUMC 파이팅 !!!
        </Banner>
        <Search />
      </HomeDiv>
    </HomeContainer>
  );
}
