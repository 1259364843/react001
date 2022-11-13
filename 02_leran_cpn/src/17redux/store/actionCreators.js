import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER } from "./constants.js";

// 返回一个对象，简写
export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});
// +1
export const incAction = () => ({
  type: INCREMENT,
});
// -1
export const decAction = () => ({
  type: DECREMENT,
});