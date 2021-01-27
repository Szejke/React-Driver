import { call, put, takeLatest } from 'redux-saga/effects';
import { createDeviceFromApi } from 'services/devices';

function* createDevice(action) {
  try {
    const newDevice = yield call(createDeviceFromApi, action.payload);
    yield put({ type: 'CREATE_DEVICE_SUCCESS', payload: newDevice });
  } catch (e) {
    yield put({ type: 'CREATE_DEVICE_FAILED', message: e.message });
  }
}

function* createDeviceSaga() {
  yield takeLatest('CREATE_DEVICE_REQUESTED', createDevice);
}

export default createDeviceSaga;
