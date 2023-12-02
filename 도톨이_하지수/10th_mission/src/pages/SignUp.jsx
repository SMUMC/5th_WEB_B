import { useState, useEffect } from "react";
import {
  Input,
  SignUpContainer,
  Label,
  Mes,
  SignUpButton,
} from "../style/SignUp.style";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [nameCheck, setNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [pwCheckCheck, setPwCheckCheck] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCorrect, setPwCorrect] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwCorrectMessage, setPwCorrectMessage] = useState("");

  const [btn, setBtn] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (nameCheck && emailCheck && pwCheck && pwCheckCheck && checkBox) {
      setBtn(true);
    }
  }, [nameCheck, emailCheck, pwCheck, pwCheckCheck, checkBox]);

  const checkName = (value) => {
    const regExp = /^[a-zA-Z가-힣]*$/;
    setName(value);
    if (value.trim() === "") {
      setNameMessage("반드시 이름을 입력해주세요.");
      setNameCheck(false);
    } else if (!regExp.test(value)) {
      setNameMessage("문자로 입력해주세요");
      setNameCheck(false);
    } else {
      setNameMessage("");
      setNameCheck(true);
    }
  };

  const checkEmail = (value) => {
    const regExp = /^[ㄱ-ㅎ가-힣a-zA-Z0-9@.]*$/;
    setEmail(value);
    if (value.trim() === "") {
      setEmailMessage("반드시 이메일을 입력해주세요.");
      setEmailCheck(false);
    } else if (!email.includes("@")) {
      setEmailMessage("이메일 양식에 맞춰주세요.");
      setEmailCheck(false);
    } else if (!regExp.test(value)) {
      setEmailMessage("영문, 숫자만 입력가능합니다.");
      setEmailCheck(false);
    } else {
      setEmailMessage("");
      setEmailCheck(true);
    }
  };

  const checkPw = (value) => {
    const regExp = /^(?=.*[A-Z][a-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;
    setPw(value);
    if (value.trim() === "") {
      setPwMessage("반드시 비밀번호를 입력해주세요.");
      setPwCheck(false);
    } else if (value.length <= 4 || value.length > 12) {
      setPwMessage("비밀번호는 4 -12자리 입력해주세요.");
      setPwCheck(false);
    } else if (!regExp.test(value)) {
      setPwMessage("영문 대소문자, 숫자, 특수문자를 사용해서 입력해주세요.");
      setPwCheck(false);
    } else {
      setPwMessage("");
      setPwCheck(true);
    }
  };

  const checkPwCheck = (value) => {
    setPwCorrect(value);
    if (value.trim() === "") {
      setPwCorrectMessage("반드시 입력해주세요.");
      setPwCheckCheck(false);
    } else if (value !== pw) {
      setPwCorrectMessage(
        "작성한 비밀번호와 동일하지 않습니다. 다시 한 번 확인해주세요."
      );
      setPwCheckCheck(false);
    } else {
      setPwCorrectMessage("");
      setPwCheckCheck(true);
    }
  };

  const handleCheckBox = (e) => {
    setCheckBox(!checkBox);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    alert("회원가입 성공");
    navigate("/");
  };

  return (
    <SignUpContainer>
      <Label> 이메일 </Label>
      <Input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => checkEmail(e.target.value.trim())}
      />
      <Mes>{emailMessage}</Mes>
      <Label> 닉네임 </Label>
      <Input
        type="text"
        placeholder="닉네임"
        value={name}
        onChange={(e) => checkName(e.target.value.trim())}
      />
      <Mes>{nameMessage}</Mes>
      <Label> 비밀번호 </Label>
      <Input
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => checkPw(e.target.value.trim())}
      />
      <Mes>{pwMessage}</Mes>
      <Label> 비밀번호 확인 </Label>
      <Input
        type="password"
        placeholder="비밀번호 확인"
        value={pwCorrect}
        onChange={(e) => checkPwCheck(e.target.value.trim())}
      />
      <Mes>{pwCorrectMessage}</Mes>
      <FormControlLabel
        control={<Checkbox />}
        label="SMU_TALK 서비스 사용을 동의하십니까?"
        onClick={handleCheckBox}
      />
      <SignUpButton disabled={!btn} onClick={handleSignup}>
        Sign Up
      </SignUpButton>
    </SignUpContainer>
  );
}
