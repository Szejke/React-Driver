import { call, put, takeEvery } from 'redux-saga/effects';
import { getDevice } from 'services/devices';

function* fetchDevices() {
  try {
    const devices = yield call(getDevice);
    yield put({ type: 'GET_DEVICES_SUCCESS', devices });
  } catch (e) {
    yield put({ type: 'GET_DEVICES_FAILED', message: e.message });
  }
}

function* getDeviceSaga() {
  yield takeEvery('GET_DEVICES_REQUESTED', fetchDevices);
}

export default getDeviceSaga;
