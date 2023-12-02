import React, { useState } from "react";
import {
  LoginContainer,
  Label,
  Input,
  LoginButton,
  AllContainer,
} from "../style/Login.style";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/userSlice";
import LoginProfile from "./LoginProfile";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const state = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(false);
    setLoading(true);

    if (email === "" || pw === "") {
      alert("Email 혹은 Pw값이 존재하지 않습니다.");
      setLoading(false);
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Email 형식에 맞지 않습니다.");
      setLoading(false);
      return;
    }

    alert("로그인 성공");
    setLogin(true);
    dispatch(loginAction(isLogin));
    setLoading(false);
    //Profile 활성화 시키기
  };

  return (
    <AllContainer>
      {state ? (
        <LoginProfile />
      ) : (
        <LoginContainer>
          <Label> Email </Label>
          <Input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Label> Password </Label>
          <Input
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <LoginButton onClick={handleLogin}>
            {loading ? "Loading..." : "Login"}
          </LoginButton>
          <LoginButton onClick={handleSignUp}>Sign Up</LoginButton>
        </LoginContainer>
      )}
    </AllContainer>
  );
}
