import { call, put, takeLatest } from 'redux-saga/effects';
import { deletePostFromApi } from 'services/devices';

function* deleteDevices(action) {
  console.log('czesc action id', action.id);
  try {
    yield call(deletePostFromApi, action.id);
    yield put({ type: 'DELETE_DEVICES_SUCCESS', id: action.id });
  } catch (e) {
    yield put({ type: 'DELETE_DEVICES_FAILED', message: e.message });
  }
}

function* deleteDeviceSaga() {
  yield takeLatest('DELETE_DEVICES_REQUESTED', deleteDevices);
}

export default deleteDeviceSaga;
