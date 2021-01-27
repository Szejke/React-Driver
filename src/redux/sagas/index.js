import { all } from 'redux-saga/effects';
import getDeviceSaga from './deviceSaga/getDevices';
import deleteDeviceSaga from './deviceSaga/deleteDevice';

export default function* rootSaga() {
  yield all([getDeviceSaga(), deleteDeviceSaga()]);
}
