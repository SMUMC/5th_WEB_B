import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";


const uploadImage = async (image) => {
  return image ? URL.createObjectURL(image) : null;
};
export const initialState = {
  posts: [
    {
      id: 0,
      title: "맨 위 입니다.",
      content: "Demo site",
      img: null,
    },
  ],
};

const postSlice = createSlice({
  name: "postSlice",
  initialState: initialState,
  reducers: {
    addPost(state, action) {
      const { id, title, content, img } = action.payload;
      const newPost = {
        id: id,
        title: title,
        content: content,
        img: img,
      };
      state.posts.push(newPost);
    },
    addComment(state, action) {
      const { postId, comment } = action.payload;
    },
    deletePost(state, action) {
      const postIdToDelete = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postIdToDelete);
    },
  },
});

export const { addPost, deletePost, addComment } = postSlice.actions;

export const addImg = createAsyncThunk('posts/addImg', async (post, { dispatch }) => {
  // Assuming you have a function to upload the image
  const imageUrl = await uploadImage(post.img);

  // Include the imageUrl in the payload
  const postWithImage = { ...post, img: imageUrl };

  // Dispatch the regular action to update the state
  dispatch(addPost(postWithImage));

  // You can return something here if needed
  return postWithImage;
});

export const addPostSuccess = createAction('posts/addPostSuccess');

export default postSlice.reducer;