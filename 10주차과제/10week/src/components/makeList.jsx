import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addImg } from '../redux/postSlice';

function Makelist() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if an image is selected before dispatching addImg
    if (image) {
      const postData = {
        id: new Date().getTime(),
        title: title,
        content: content,
        img: image,
      };
  
      console.log('Dispatching addImg with data:', postData);
      dispatch(addImg(postData));
      
    } else {
      // Handle the case where no image is selected
      // You may want to dispatch a different action or show an error message
      console.error("No image selected");
    }
    alert("업로드 완료~")
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <PostContainer onSubmit={handleSubmit}>
      <Label>
        제목:
        <StyledInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Label>
      <Label>
        내용:
        <StyledText value={content} onChange={(e) => setContent(e.target.value)} />
      </Label>
      <Label>
        이미지:
        <StyledInput
          type="file" 
          accept="image/*" 
          onChange={(e) => {
            console.log("Selected file:", e.target.files[0]);
            setImage(e.target.files[0]);
          }}
        />
      </Label>
      <Btn type="submit">게시물 업로드</Btn>
    </PostContainer>
  );
}

const PostContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledInput = styled.input`
  font-size: 13px;
  background-color: transparent;
  color: white;
  width: 70%;
  height: 30px;
  border-radius: 40px;
  padding-left: 10px;
  border: 1px solid white;
  margin-bottom:10px;
`;
const StyledText = styled.textarea`
font-size: 13px;
background-color: transparent;
color: white;
width: 70%;
height: 30px;
border-radius: 40px;
padding-left: 10px;
border: 1px solid white;
margin-bottom:10px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
`
const Btn = styled.button`
background-color: white;
border: 1px solid black;
color: black;
width: 100px;
`
export default Makelist;
