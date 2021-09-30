import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST, RENDER_BLOG } from '../actions';

export function* fetchToDoList() {
  const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}


export function* fetchBlogsByBlogId() {
  const endpoint = 'http://localhost:9001/v1/blogs/blog/3b0f24bc-fcda-44e5-875e-6fbfc8fe34c3';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_BLOG, blogList: data });
} 

export function* loadBlog() {
  yield takeEvery(RENDER_BLOG, fetchBlogsByBlogId);
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([
    loadBlog(),
    loadToDoList(), 
  ]);
}