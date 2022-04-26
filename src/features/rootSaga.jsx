import { all } from 'redux-saga/effects';
import appSaga from './App/appSaga';
import todoSaga from './Todo/todoSaga';

export default function* rootSaga() {
  yield all([appSaga(), todoSaga()]);
}
