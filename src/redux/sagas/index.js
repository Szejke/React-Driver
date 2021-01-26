import { all } from 'redux-saga/effects';
import deviceSaga from './deviceSaga';

export default function* rootSaga() {
  yield all([deviceSaga()]);
}
