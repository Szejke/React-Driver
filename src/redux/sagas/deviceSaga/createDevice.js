import { call, put, takeLatest } from 'redux-saga/effects';
import { createDeviceFromApi } from 'services/devices';

function* createDevice(action) {
  try {
    console.log('serwer', action.payload);
    console.log('serwer', action);
    const newDevice = yield call(createDeviceFromApi, action.payload);
    console.log('newDevice', newDevice);
    yield put({ type: 'CREATE_DEVICE_SUCCESS', payload: newDevice });
  } catch (e) {
    yield put({ type: 'CREATE_DEVICE_FAILED', message: e.message });
  }
}

function* createDeviceSaga() {
  yield takeLatest('CREATE_DEVICE_REQUESTED', createDevice);
}

export default createDeviceSaga;
