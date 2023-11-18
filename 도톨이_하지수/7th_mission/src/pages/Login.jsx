import { useState, useEffect } from "react";
import {
  Input,
  LoginContainer,
  Label,
  Mes,
  LoginButton,
} from "../components/Movies.style";

export default function Login() {
  const [nameCheck, setNameCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [pwCheckCheck, setPwCheckCheck] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCorrect, setPwCorrect] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  const [ageMessage, setAgeMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwCorrectMessage, setPwCorrectMessage] = useState("");

  const [btn, setBtn] = useState(false);

  useEffect(() => {
    if (nameCheck && emailCheck && ageCheck && pwCheck && pwCheckCheck) {
      setBtn(true);
    }
  }, [nameCheck, emailCheck, ageCheck, pwCheck, pwCheckCheck]);

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

  const checkAge = (value) => {
    const regExp = /^[0-9]*$/;
    setAge(value);

    if (value.trim() === "") {
      setAgeMessage("반드시 나이를 입력해주세요.");
      setAgeCheck(false);
    } else if (!regExp.test(value)) {
      setAgeMessage("숫자(정수)만 입력가능합니다.");
      setAgeCheck(false);
    } else if (value < 20) {
      setAgeMessage("19세 미만은 가입이 불가합니다.");
      setAgeCheck(false);
    } else {
      setAgeMessage("");
      setAgeCheck(true);
    }
  };
  const checkPw = (value) => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
    setPw(value);

    if (value.trim() === "") {
      setPwMessage("반드시 비밀번호를 입력해주세요.");
      setPwCheck(false);
    } else if (value.length <= 4) {
      setPwMessage("비밀번호는 4자리 이상 입력해주세요.");
      setPwCheck(false);
    } else if (value.length > 12) {
      setPwMessage("비밀번호는 최대 12자리까지 가능합니다.");
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

  const vaildData = () => {
    console.log("폼 데이터:", { name, age, email, pw, pwCorrect });
    alert("회원가입 완료");
  };

  return (
    <LoginContainer>
      <h1> - 회원 가입 - </h1>
      <Label> 이름 </Label>
      <Input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => checkName(e.target.value.trim())}
      />

      <Mes>{nameMessage}</Mes>

      <Label> 이메일 </Label>
      <Input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => checkEmail(e.target.value.trim())}
      />
      <Mes>{emailMessage}</Mes>

      <Label> 나이 </Label>
      <Input
        type="text"
        placeholder="나이"
        value={age}
        onChange={(e) => checkAge(e.target.value.trim())}
      />
      <Mes>{ageMessage}</Mes>

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
      <br />

      <LoginButton disabled={!btn} onClick={vaildData}>
        가입하기
      </LoginButton>
    </LoginContainer>
  );
}
