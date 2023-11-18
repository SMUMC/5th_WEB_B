import styled from "styled-components";

export const AppContainer = styled.div`
  h1 {
    text-align: center;
  }

  button {
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  background-color: navy;
  height: 130px;
  max-width: 100%;
`;

export const LogoBox = styled.div`
  width: 1000px;

  h1 {
    font-weight: bold;
    font-size: 45px;
    color: white;
  }
`;

export const NavbarItem = styled.div`
  width: 50px;
  height: 50px;
  margin: 40px 20px 15px 41%;
  color: white;
`;

export const CartContainer = styled.div`
  flex-direction: row;
  display: flex;
  margin: 15px 15px 15px 22%;
  padding: 40px;
  width: 1300px;
  border-radius: 10px;
  background-color: rgba(151, 186, 216, 0.3);
`;

export const CountContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  font-size: 45px;
  display: flex;
  margin: 0 0 0 auto;

  h3 {
    margin-left: 12px;
  }
`;

export const ItemsContainer = styled.div`
  font-size: 27px;
  margin: 30px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  margin: 50px;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
`;

export const TotalContainer = styled.div`
  width: 1300px;
  margin: 15px 15px 15px 18%;
`;

export const Total = styled.div`
  margin: 20px 10px 10px 15%;
  font-size: 35px;
  font-weight: bold;
`;

export const Hr = styled.hr`
  margin-top: 30px;
  margin-left: 25px;
  height: 2px;
  width: 1500px;
  background-color: black;
`;

export const Button = styled.button`
  width: 400px;
  height: 65px;
  margin: 30px 15px 30px 43%;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
`;

export const Button1 = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background-color: transparent;
`;
