import React from "react";
import Navbar from "./component/Navbar";
import { Cart } from "./component/Cart";
import Total from "./component/Total";
import { Title, AppContainer } from "./component/Cart.style";

export default function App() {
  return (
    <AppContainer>
      <Navbar />
      <Title>당신이 선택한 음악</Title>
      <Cart />
      <Total />
    </AppContainer>
  );
}
