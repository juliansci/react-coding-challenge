import { configureStore } from '@reduxjs/toolkit';
import postReducer from 'store/postSlice';

export default configureStore({
  reducer: {
    post: postReducer,
  },
});
