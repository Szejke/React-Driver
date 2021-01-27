import { call, put, takeLatest } from 'redux-saga/effects';
import { createDeviceFromApi } from 'services/devices';

function* createDevices(action) {
  try {
    const newDevice = yield call(createDeviceFromApi, action.payload);
    yield put({ type: 'CREATE_DEVICES_SUCCESS', payload: newDevice });
  } catch (e) {
    yield put({ type: 'CREATE_DEVICES_FAILED', message: e.message });
  }
}

function* deleteDeviceSaga() {
  yield takeLatest('CREATE_DEVICES_REQUESTED', createDevices);
}

export default deleteDeviceSaga;
