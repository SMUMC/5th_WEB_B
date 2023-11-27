import React, { useState, useEffect } from 'react';
import { SignupContainer, SignupFormContainer, Input, Button, PStyling } from "./registerPage.style";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [nameText, setNameText] = useState("");
    const [emailText, setEmailText] = useState("");
    const [ageText, setAgeText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [checkPasswordText, setCheckPasswordText] = useState("");

    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    const [nameBool, setNameBool] = useState(false);
    const [emailBool, setEmailBool] = useState(false);
    const [ageBool, setAgeBool] = useState(false);
    const [passwordBool, setPasswordBool] = useState(false);
    const [checkPasswordBool, setCheckPasswordBool] = useState(false);
    const [signupEnabled, setSignupEnabled] = useState(false); 

    let passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
    let emailReg = new RegExp("^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$");


    const navigate = useNavigate(); 

    useEffect(() => {
        if (name === "") {
            setNameText("반드시 이름을 입력해주세요!");
            setNameBool(true);
        } else {
            setNameText(""); 
            setNameBool(false);
        }
    }, [name]);

    useEffect(() => {
        if (emailReg.test(email)) {
            setEmailText("");
            setEmailBool(false);
        } else {
            setEmailText("이메일 양식을 맞춰주세요");
            setEmailBool(true);
        }
    }, [email]);

    useEffect(() => { //수정해야함
        if (!isNaN(age) && age !== "") {
            if (parseInt(age) < 0) {
                setAgeText("나이는 음수가 될 수 없습니다.");
                setAgeBool(true);
            } else if (!Number.isInteger(parseFloat(age))){
                setAgeText("나이는 소수가 될 수 없습니다.")
                setAgeBool(true);
            }
            else if (parseInt(age) < 19) {
                    setAgeText("19살 이상만 가입가능합니다.");
                    setAgeBool(true);
            }
            else{
                setAgeText("");
                setAgeBool(false);
            }
        }    
        else {
            setAgeText("나이는, 숫자를 입력받아야합니다.");
            setAgeBool(true);
        }
    }, [age]);

    useEffect(() => { //수정해야함.
        if(password.length<4){
            setPasswordText("비밀번호는 최소 4자리 이상이어야합니다.")
            setPasswordBool(true)
        }else if(password.length >12){
            setPasswordText("비밀번호는 최대 12자리까지 가능합니다.")
            setPasswordBool(true)
        }
        else{
            if (passwordReg.test(password)) {
                setPasswordText("");
                setPasswordBool(false)
            } else {
                setPasswordText("영어+숫자+특수문자를 조합하여 작성해주세요!");
                setPasswordBool(true)
            }
        }

    }, [password]);

    useEffect(() => {
        if (password === checkPassword && password !== '') {
            setCheckPasswordText("");
            setCheckPasswordBool(false);
        } else {
            setCheckPasswordText("작성하신 비밀번호와 동일한지 확인을 해주세요");
            setCheckPasswordBool(true);
        }
    }, [checkPassword]);

    useEffect(() => {
        // 모든 validation을 통과하면 회원가입 버튼을 활성화
        if (!nameBool && !emailBool && !ageBool && !passwordBool && !checkPasswordBool) {
            setSignupEnabled(true);
        } else {
            setSignupEnabled(false);
        }
    }, [nameBool, emailBool, ageBool, passwordBool, checkPasswordBool]);

    const handleSignup = async () => {
        try {
            // 사용자 정보를 서버로 전송
            const response = await axios.post('http://localhost:8080/auth/signup', {
                name: name,
                email: email,
                age: age,
                username: userId,
                password: password,
                passwordCheck: checkPassword
            });
            alert("회원가입이 정상적으로 처리되었습니다.")
            // 서버로부터의 응답 처리
            console.log('회원가입 성공:', response.data);
            navigate("/login");
        } catch (error) {
            console.error('회원가입 실패:', error);
        }
    };
    return (
        <SignupContainer>
            <SignupFormContainer>
                <Input type="text" onChange={(e) => setName(e.target.value)} placeholder="이름"></Input>
                {nameBool && <PStyling>{nameText}</PStyling>}
                <Input type="text" onChange={(e) => setUserId(e.target.value)} placeholder="아이디"></Input>
                {/* {nameBool && <PStyling>{nameText}</PStyling>} */}
                <Input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="이메일"></Input>
                {emailBool && <PStyling>{emailText}</PStyling>}
                <Input type="text" onChange={(e) => setAge(e.target.value)} placeholder="나이"></Input>
                {ageBool && <PStyling>{ageText}</PStyling>}
                <Input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"></Input>
                {passwordBool && <PStyling>{passwordText}</PStyling>}
                <Input type="text" onChange={(e) => setCheckPassword(e.target.value)} placeholder="비밀번호 확인"></Input>
                {checkPasswordBool && <PStyling>{checkPasswordText}</PStyling> }
                <Button type="button" disabled={!signupEnabled} onClick={handleSignup}>회원가입</Button>
            </SignupFormContainer>
        </SignupContainer>
    );
}

export default RegisterPage;
