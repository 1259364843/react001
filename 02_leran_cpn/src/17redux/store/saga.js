import {takeEvery, put, all} from 'redux-saga/effects'
import {FETCH_HOME_MULTIDATA } from "./constants.js";
import axios from 'axios'
import { changeBannersAction, changeRecommendsAction } from './actionCreators';

// 导出一个生成器函数
function* mySaga() {
  // 拦截,接收两个参数,一个是type,另外是生成器函数
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchMultidata)
}
// 在此处发送网络请求
function* fetchMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata")
  console.log(res);
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendsAction(recommends))
  ])
  
}

export default mySaga