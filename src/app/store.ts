import loginSlice from './../pages/login/loginSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    user: loginSlice,
  },
});
