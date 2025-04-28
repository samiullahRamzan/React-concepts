import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Features/Todoslice";

const store = configureStore({
  reducer: {
    todo: reducer,
  },
  devTools: true,
});

export default store;
