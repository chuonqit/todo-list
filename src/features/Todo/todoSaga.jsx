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
  updateTodoStatus,
  updateTodoStatusSuccess,
  deleteTodo,
  deleteTodoSuccess,
} from './todoReducer';

function* setTodoSaga(action) {
  yield put(setTodoSuccess(action.payload));
}

function* updateTodoSaga(action) {
  yield put(updateTodoSuccess(action.payload));
}

function* updateTodoStatusSaga(action) {
  yield put(updateTodoStatusSuccess(action.payload));
}

function* selectTodoSaga(action) {
  yield put(selectTodoSuccess(action.payload));
}

function* deleteTodoSaga(action) {
  yield put(deleteTodoSuccess(action.payload));
}

function* clearSelectTodoSaga() {
  yield put(clearSelectTodoSuccess());
}

export default function* todoSaga() {
  yield takeLatest(setTodo.toString(), setTodoSaga);
  yield takeLatest(updateTodo.toString(), updateTodoSaga);
  yield takeLatest(selectTodo.toString(), selectTodoSaga);
  yield takeLatest(deleteTodo.toString(), deleteTodoSaga);
  yield takeLatest(clearSelectTodo.toString(), clearSelectTodoSaga);
  yield takeLatest(updateTodoStatus.toString(), updateTodoStatusSaga);
}
