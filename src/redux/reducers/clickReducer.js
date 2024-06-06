const initialState = {
  count: 0,
};

const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default clickReducer;

// using the slice method
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0,
// };

// const clickSlice = createSlice({
//   name: "click",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//   },
// });

// export const { increment, decrement } = clickSlice.actions;
// export default clickSlice.reducer;
