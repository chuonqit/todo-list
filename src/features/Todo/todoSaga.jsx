import { put, takeLatest } from 'redux-saga/effects';
import {
  selectTodo,
  setTodo,
  setTodoSuccess,
  selectTodoSuccess,
  clearSelectTodo,
  clearSelectTodoSuccess,
  updateTodo,
  updateTodoSuccess,
} from './todoReducer';

function* setTodoSaga(action) {
  yield put(setTodoSuccess(action.payload));
}

function* updateTodoSaga(action) {
  yield put(updateTodoSuccess(action.payload));
}

function* selectTodoSaga(action) {
  yield put(selectTodoSuccess(action.payload));
}

function* clearSelectTodoSaga() {
  yield put(clearSelectTodoSuccess());
}

export default function* todoSaga() {
  yield takeLatest(setTodo.toString(), setTodoSaga);
  yield takeLatest(updateTodo.toString(), updateTodoSaga);
  yield takeLatest(selectTodo.toString(), selectTodoSaga);
  yield takeLatest(clearSelectTodo.toString(), clearSelectTodoSaga);
}
