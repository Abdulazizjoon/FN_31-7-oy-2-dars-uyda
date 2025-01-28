import { configureStore } from "@reduxjs/toolkit";
import Counter from "./Counter";
import modal from "./modal";
import todo from "./todo";

export const store = configureStore({
  reducer: {
    counter: Counter,
    modal: modal,
    todo: todo,
  },
});
