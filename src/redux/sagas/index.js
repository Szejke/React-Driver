import { all } from 'redux-saga/effects';
import deviceSaga from './deviceSaga/getDevices';

export default function* rootSaga() {
  yield all([deviceSaga()]);
}
