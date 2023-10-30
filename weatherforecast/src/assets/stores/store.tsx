import { configureStore } from '@reduxjs/toolkit';
// import errorReducer from './error';
// import todoReducer from './todo';

export const store = configureStore({
  reducer: {
    // error: errorReducer,
    // todo: todoReducer,
  },
});