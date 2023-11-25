import styled from "styled-components";

export const LoginContainer = styled.form`
  background-color: #36517a;
  color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    padding: 20px;
    margin: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  font-weight: bold;
  font-size: 15px;
  text-align: left;
  margin: 8px;
`;

export const Input = styled.input`
  width: 350px;
  height: 35px;
  border-radius: 10px;
`;

export const Mes = styled.div`
  margin: 5px 0px 5px 0px;
  font-size: 10px;
  color: red;
`;

export const SignUpButton = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-decoration: none;

  h1 {
    color: white;
    font-size: 15px;
  }
`;
