import { all } from 'redux-saga/effects';
import getDeviceSaga from './deviceSaga/getDevices';
import deleteDeviceSaga from './deviceSaga/deleteDevice';
import createDeviceSaga from './deviceSaga/createDevice';

export default function* rootSaga() {
  console.log('asdasd', createDeviceSaga());
  yield all([getDeviceSaga(), deleteDeviceSaga(), createDeviceSaga()]);
}
