import styled from "styled-components";

export const SignUpContainer = styled.form`
  color: black;
  width: 500px;
  height: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px;

  :disabled {
    color: gray;
    border-color: gray;
  }
`;

export const Label = styled.label`
  display: flex;
  font-size: 13px;
  text-align: left;
  margin: 5px;
`;

export const Input = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 8px;
  border-color: gray;
`;

export const Mes = styled.div`
  margin: 3px 0px 3px 0px;
  font-size: 11px;
  color: red;
`;

export const SignUpButton = styled.button`
  width: 35%;
  height: 30%;
  color: black;
  border-radius: 8px;
  font-size: 18px;
  padding: 8px;

  margin-left: 20%;
  margin-top: 15px;
`;
