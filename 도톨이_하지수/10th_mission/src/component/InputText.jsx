import React, { useRef } from "react";
import { useState } from "react";
import {
  InputContainer,
  Input,
  InputButton,
  FileButton,
} from "../style/InputText.style";
import { useDispatch } from "react-redux";
import { contentAction } from "../redux/userSlice";

export default function InputText() {
  const [count, setCount] = useState(0);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handlePostSubmit = () => {
    setCount(count + 1);
    dispatch(contentAction({ count, content }));
    setContent("");
  };

  const imageInput = useRef();

  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="어떤 재밌는 일이 있었나요?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input type="file" id="avatar" accept="image/png, image/jpeg" />

      <InputButton onClick={handlePostSubmit}> 등록하기 </InputButton>

      <input type="file" style={{ display: "none" }} ref={imageInput} />
      <FileButton onClick={onCickImageUpload}>이미지 업로드</FileButton>
    </InputContainer>
  );
}
