import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: 0,
};

let Counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export default Counter.reducer;
export let { increment, decrement, reset } = Counter.actions;
