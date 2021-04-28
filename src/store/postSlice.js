import { createSlice } from '@reduxjs/toolkit';

function getPostIndex(posts, postId) {
  return posts.findIndex((post) => post.id === +postId);
}
export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
  },
  reducers: {
    // Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update
    // logic that becomes correct immutable updates.
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setComments: (state, action) => {
      const { postId, comments } = action.payload;
      const postIndex = getPostIndex(state.posts, postId);
      if (postIndex >= 0) {
        state.posts[postIndex].comments = comments;
      }
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const postIndex = getPostIndex(state.posts, postId);
      if (postIndex >= 0) {
        const post = state.posts[postIndex];
        if (!post.comments) {
          post.comments = [];
        }
        post.comments.push(comment);
      }
    },
  },
});

export const { setPosts, setComments, addComment } = postSlice.actions;

export default postSlice.reducer;
