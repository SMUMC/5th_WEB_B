import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from '../redux/loginSlice';
import { LoginPageContainer, LoginForm, InputField, SubmitButton } from './login.style';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [userID, setUserID] = useState("");
    const [userPW, setUserPW] = useState("");
    const navigate = useNavigate();
    const apiUrl = "http://localhost:8080/auth/login";

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify({
                    username: userID,
                    password: userPW,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                console.log("token is ", data.token, "username is ", data.username)
                localStorage.setItem('token', data.token)
                dispatch(login({ token: data.token, userName: data.username }));
                navigate("/")
            } else {
                alert("login failed");
                console.error('Failed to fetch user info');
            }
        } catch (error) {
            alert("login failed");
            console.error('Error fetching user info:', error);
        }
    };

    return (
        <LoginPageContainer>
            <LoginForm onSubmit={handleLogin}>
                <InputField
                    type="text"
                    placeholder="Username"
                    value={userID}
                    onChange={(e) => setUserID(e.target.value)}
                />
                <InputField
                    type="text"
                    placeholder="Password"
                    value={userPW}
                    onChange={(e) => setUserPW(e.target.value)}
                />
                <SubmitButton type="submit">Login</SubmitButton>
            </LoginForm>
        </LoginPageContainer>
    );
};

export default LoginPage;
