import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const FormContainer = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #7e57c2;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a1b9a;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 10px;
  font-size: 14px;
`;

export const SuccessMessage = styled.div`
  color: #00cc00;
  margin-top: 10px;
  font-size: 14px;
`;
