import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/feature/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
