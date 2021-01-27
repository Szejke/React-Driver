import { call, put, takeLatest } from 'redux-saga/effects';
import { updateDeviceFromApi } from 'services/devices';

function* updateDevice(action) {
  try {
    const device = yield call(updateDeviceFromApi, action.payload, action.id);
    yield put({ type: 'UPDATA_DEVICE_SUCCESS', id: action.id, payload: device });
  } catch (e) {
    yield put({ type: 'UPDATA_DEVICE_FAILED', message: e.message });
  }
}

function* updateDeviceSaga() {
  yield takeLatest('UPDATA_DEVICE_REQUESTED', updateDevice);
}

export default updateDeviceSaga;
