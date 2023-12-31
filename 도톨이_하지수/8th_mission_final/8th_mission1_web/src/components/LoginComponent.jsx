import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { StyledInput, StyledButton } from "./Login.style";
import { loginUser } from "../redux/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.user.userInfo);
  // console.log(userInfo);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (id === "" || pw === "") {
      alert("ID 혹은 PW값이 존재하지 않습니다.");
      return;
    }

    // 미션인증 - 2
    console.log("Form Data:", { id, pw });

    setLoading(true);

    axios({
      method: "POST",
      url: "http://localhost:3000/user/login",
      data: {
        id: id,
        pw: pw,
      },
    })
      .then((res) => {
        dispatch(loginUser(res.data.result));
        setLoading(false);
        // 미션인증 -3
        console.log("Login Successful. User Info:", res.data.result);
        alert("로그인 성공");
      })

      .catch((error) => {
        if (error.response.status === 400) {
          alert(error.response.data.message);
        } else if (error.response.status === 401) {
          alert(error.response.data.message);
        } else if (error.response.status === 402) {
          alert(error.response.data.message);
        } else if (error.response.status === 404) {
          alert(error.response.data.message);
        } else {
          alert("로그인에 실패하였습니다.");
        }

        // 미션인증 -4
        console.error("Login Error:", error);
      });

    setLoading(false);
  };

  return (
    <div>
      <StyledInput
        type="text"
        placeholder="아이디를 입력해주세요."
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <StyledInput
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={pw}
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <StyledButton onClick={handleLogin} disabled={loading}>
        {loading ? "Loading..." : "로그인"}
      </StyledButton>
    </div>
  );
}
