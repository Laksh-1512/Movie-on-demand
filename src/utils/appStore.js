// store.js
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice"; // Assuming this is correctly implemented in userSlice.js
import moviesReducer from "./moviesSlice";
import GPTReducer from "./GptSlice"
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: GPTReducer,
    config:configSlice,
  },
});

export default appStore;
