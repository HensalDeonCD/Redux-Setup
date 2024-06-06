// Normal way of using
export const increment = () => ({
  type: "INCREMENT",
});
export const decrement = () => ({
  type: "DECREMENT",
});


// Action creator with Redux Thunk
// export const increment = () => {
//   return async (dispatch) => {
//     dispatch({ type: "INCREMENT"});
//   };
// };
// export const decrement = () => {
//   return async (dispatch) => {
//     dispatch({ type: "DECREMENT"});
//   };
// };