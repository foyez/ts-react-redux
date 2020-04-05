import { put, all, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { loadTodos, loadTodosSuccess, loadTodosFailure } from 'slices/todo'

/**
 * GET todos from API
 */
function* fetchTodos() {
  try {
    const res = yield axios.get('https://jsonplaceholder.typicode.com/todos')

    yield put(loadTodosSuccess(res.data))
  } catch (error) {
    yield put(loadTodosFailure(error.message))
  }
}

export function* rootSaga() {
  yield all([takeLatest(loadTodos.type, fetchTodos)])
}
