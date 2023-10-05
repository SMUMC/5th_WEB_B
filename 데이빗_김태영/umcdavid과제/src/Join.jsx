
import React, { useState } from 'react';
import Back from "./background.svg";

function Join() {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };


    if (!formData.name) {
      valid = false;
      newErrors.name = '이름을 입력하세요.';
    } else {
      newErrors.name = '';
    }


    if (!formData.nickname) {
      valid = false;
      newErrors.nickname = '닉네임을 입력하세요.';
    } else {
      newErrors.nickname = '';
    }


    if (!formData.email) {
      valid = false;
      newErrors.email = '이메일을 입력하세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      valid = false;
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    } else {
      newErrors.email = '';
    }


    if (!formData.password) {
      valid = false;
      newErrors.password = '비밀번호를 입력하세요.';
    } else if (formData.password.length < 6) {
      valid = false;
      newErrors.password = '비밀번호는 최소 6자 이상이어야 합니다.';
    } else {
      newErrors.password = '';
    }


    if (formData.password !== formData.confirmPassword) {
      valid = false;
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    } else {
      newErrors.confirmPassword = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
    
      alert('회원가입이 완료되었습니다.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };
    switch (fieldName) {
      case 'name':
        newErrors.name = value ? '' : '이름을 입력하세요.';
        break;
      case 'nickname':
        newErrors.nickname = value ? '' : '닉네임을 입력하세요.';
        break;
      case 'email':
        newErrors.email = value
          ? /\S+@\S+\.\S+/.test(value)
            ? ''
            : '올바른 이메일 형식이 아닙니다.'
          : '이메일을 입력하세요.';
        break;
      case 'password':
        newErrors.password = value
          ? value.length >= 6
            ? ''
            : '비밀번호는 최소 6자 이상이어야 합니다.'
          : '비밀번호를 입력하세요.';
        break;
      case 'confirmPassword':
        newErrors.confirmPassword = value === formData.password ? '' : '비밀번호가 일치하지 않습니다.';
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  return (
    <div style={{
        backgroundImage: `url(${Back})`,
         width: "1833px", height: "1024px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          }}>
        <div style={{
            width: "1000px",
             height: "800px",
              backgroundColor: "grey",
               opacity: "0.5",
                textAlign: "center",
                 justifyContent:"center",
                 borderRadius: "20px",
                 }}>
      <h1 style={{borderBottom: "1px solid white", }}>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="error">{errors.name}</div>
        </div>
        <div>
          <label>닉네임</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
          <div className="error">{errors.nickname}</div>
        </div>
        <div>
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error">{errors.email}</div>
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error">{errors.password}</div>
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="error">{errors.confirmPassword}</div>
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
    </div>
  );
}

export default Join;
