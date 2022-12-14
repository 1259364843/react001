import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMENDS } from "./constants.js";

// 默认数据
// const defaultState = {
//   counter: 0,
//   banners: [],//轮播图,默认空数组
//   recommends: []//推荐列表
// };
const CountState = {
  counter: 0,
};
// 拆分reducer
function counterReducer(state = CountState, action){
  switch (action.type) {
    case INCREMENT:
      // 拿到原来的state
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}
const HomeState = {
  banners: [],//轮播图,默认空数组
  recommends: []//推荐列表
};
function homeReducer(state = HomeState, action){
  switch (action.type) {
    case CHANGE_BANNERS:
      // 返回state和传递过来的banners
      return {...state, banners: action.banners};
    case CHANGE_RECOMMENDS:
      return {...state, recommends: action.recommends};
    default:
      return state;
  }
}

// 合并reducer
function reducer(state = {}, action) {
  // 返回一个对象
  return {
    counterInfo: counterReducer(state.CountState, action),
    homeInfo: homeReducer(state.HomeState, action)
  }
  
}

export default reducer