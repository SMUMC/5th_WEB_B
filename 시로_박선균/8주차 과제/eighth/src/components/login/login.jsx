import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../redux/loginSlice';
import { LoginPageContainer, LoginForm, InputField, SubmitButton } from './login.style';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [userID, setUserID] = useState("");
    const [userPW, setUserPW] = useState("");
    const apiUrl = "http://localhost:3000/user/login";

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify({
                    id: userID,
                    pw: userPW,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                console.log(data.result);
                dispatch(login(data.result));
            } else {
                console.error('Failed to fetch user info');
            }
        } catch (error) {
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
                    type="password"
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
