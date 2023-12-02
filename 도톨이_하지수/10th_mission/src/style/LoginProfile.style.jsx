import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  width: 300px;
  height: 35%;
  text-align: left;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin: 3px;
`;

export const Input = styled.input`
  width: 95%;
  height: 40px;
  border-radius: 8px;
  border-color: gray;
`;

export const LogoutButton = styled.button`
  width: 120px;
  height: 35px;
  font-size: 80%;
  border-radius: 8px;
  border-color: gray;
  margin-top: 10px;
  font-weight: bold;
  color: black;
`;

export const FollowerBox = styled.div`
  border-radius: 10px;
  border: none;
  font-size: 90%;
  text-align: center;
`;
