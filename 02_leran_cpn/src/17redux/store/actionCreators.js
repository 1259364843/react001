import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMENDS,FETCH_HOME_MULTIDATA } from "./constants.js";

import axios from 'axios'
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
export const increment = () => ({
  type: INCREMENT,
});
// -1
export const decrement = () => ({
  type: DECREMENT,
});

/**
 * 轮播图和推荐
 */
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners: banners
})

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends: recommends
})

/**
 * redux-thunk中定义的action函数
 */

export const getMultidataAction = (dispatch) => {
  console.log("redux-thunk中定义的action函数");
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  }).then(res => {
    console.log(res);
    const data = res.data.data
    // this.props.changeBanners(data.banner.list)
    // this.props.changeRecommends(data.recommend.list)
    dispatch(changeBannersAction(data.banner.list))
    dispatch(changeRecommendsAction(data.recommend.list))
  })
}
/**
 * redux-saga拦截action
 * 
 */

export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA
}