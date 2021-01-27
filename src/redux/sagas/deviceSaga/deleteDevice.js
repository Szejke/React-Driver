import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteDeviceFromApi } from 'services/devices';

function* deleteDevices(action) {
  try {
    yield call(deleteDeviceFromApi, action.id);
    yield put({ type: 'DELETE_DEVICE_SUCCESS', id: action.id });
  } catch (e) {
    yield put({ type: 'DELETE_DEVICE_FAILED', message: e.message });
  }
}

function* deleteDeviceSaga() {
  yield takeLatest('DELETE_DEVICE_REQUESTED', deleteDevices);
}

export default deleteDeviceSaga;
