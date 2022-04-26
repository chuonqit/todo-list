import { put, takeLatest } from 'redux-saga/effects';
import { setTheme, setThemeSuccess } from './appReducer';

function* setThemeSaga(action) {
  yield put(setThemeSuccess(action.payload === 'light' ? 'dark' : 'light'));
}

export default function* appSaga() {
  yield takeLatest(setTheme.toString(), setThemeSaga);
}
