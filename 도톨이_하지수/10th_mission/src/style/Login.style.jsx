import styled from "styled-components";

export const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 35%;
  padding: 10px;
  margin: 20px;
`;

export const LoginContainer = styled.form`
  text-align: left;
  color: black;
  width: 80%;
  height: 35%;
`;

export const Label = styled.label`
  display: flex;
  font-size: 13px;
  margin: 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border-color: gray;
`;

export const LoginButton = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 10px;
  border-color: gray;
  margin: 10px 15px 10px 15px;
  font-size: 80%;
  font-weight: bold;
  color: black;
`;
