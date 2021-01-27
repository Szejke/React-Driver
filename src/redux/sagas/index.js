import { all } from 'redux-saga/effects';
import getDeviceSaga from './deviceSaga/getDevices';
import deleteDeviceSaga from './deviceSaga/deleteDevice';
import createDeviceSaga from './deviceSaga/createDevice';
import updateDeviceSaga from './deviceSaga/updateDevice';

export default function* rootSaga() {
  yield all([getDeviceSaga(), deleteDeviceSaga(), createDeviceSaga(), updateDeviceSaga()]);
}
