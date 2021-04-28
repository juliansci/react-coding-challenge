import { createContext, useContext, useReducer, useMemo } from 'react';

const PostsContext = createContext();
const UPDATE_POST_TYPE = 'posts/update_post';
const UPDATE_POSTS_TYPE = 'posts/update_posts';

function postsReducer(state, action) {
  if (action.type === UPDATE_POSTS_TYPE) {
    console.log('posts in payload: ', action.payload);
    return action.payload;
  }
  if (action.type === UPDATE_POST_TYPE) {
    const newPosts = [...state];
    const postUpdate = action.payload;
    const index = newPosts.findIndex((post) => post.id === postUpdate.id);
    newPosts[index] = postUpdate;
    return newPosts;
  }
  return state;
}

function PostsContextProvider(props) {
  const [state, dispatch] = useReducer(postsReducer, []);
  const value = useMemo(() => [state, dispatch], [state]);
  return <PostsContext.Provider value={value} {...props} />;
}

function usePostContext() {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error(`usePostContext must be used within a PostsContext provider`);
  }

  const [state, dispatch] = context;

  const updatePost = (payload) => dispatch({ type: UPDATE_POST_TYPE, payload });
  const updatePosts = (payload) => dispatch({ type: UPDATE_POSTS_TYPE, payload });

  return {
    posts: state,
    updatePosts,
    updatePost,
  };
}

export { PostsContextProvider, usePostContext };
