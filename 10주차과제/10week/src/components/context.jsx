import { ChatIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addComment } from '../redux/postSlice';
export default function Context() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.posts.comments) || []; 
  if (!posts || posts.length === 0) {
    return <MidContainer>No posts available</MidContainer>;
  }
  

  const handleCommentSubmit = (postId, comment) => {
    dispatch(addComment({ postId, comment }));
    console.log(comment)
  };
  console.log(posts);

  return (
    <MidContainer>
      {posts.map((post) => (
        <PostContainer key={post.id}>
          {post.img && <Image  src={post.img} alt={post.title} />}
          <TextContainer>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </TextContainer>
          
          <Option>
          <Button w='33%' colorScheme="grey" _hover={{color: "teal.500",}}>Hover me</Button>
          <Button w='33%' colorScheme="grey" _hover={{color: "teal.500",}} onClick={() => {
                const isCommenting = comments.some((c) => c.postId === post.id);
                if (!isCommenting) {
              
                  handleCommentSubmit(post.id, "New Comment");
                }
              }}><ChatIcon/></Button>
          <Button w='33%' colorScheme="grey" _hover={{color: "teal.500",}}>Hover me</Button>
          </Option>
          {/* Render the comment input if commenting for this post */}
          {comments.map((comment) => (
            comment.postId === post.id && (
              <CommentInput key={comment.postId}>
                <StyledInput placeholder="Type your comment" />
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => handleCommentSubmit(post.id, "New Comment")}
                >
                  Add Comment
                </Button>
              </CommentInput>
            )
          ))}
        </PostContainer>
      ))}
    </MidContainer>
  );
}
const TextContainer = styled.div`
  width: 70%;
  height: 50%;
`
const MidContainer = styled.div`
  width: 50%;
  border-right: 1px solid grey;
  background-color: transparent;
  border-left: 1px solid grey;
`;

const PostContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 70%;
  background-color: rgb(22, 24, 28);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 40%;
`
const Option = styled.div`
  width: 100%;
  height: 50px;
`
const CommentInput = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledInput = styled.input`
  position: absolute;
  font-size: 16px;
  background-color: transparent;
  color: white;
  width: 100%;
  height: 30px;
  border-radius: 40px;
  padding-left: 10px;
`;