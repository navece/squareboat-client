import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    deletePost: (state, action) => {
      const newArray = state.posts.filter((doc) => {
        return doc._id !== action.payload;
      });
      state.posts = newArray;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
