import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

const getUrl = '/device';

function getDevice() {
  return axios
    .get(getUrl)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

function* fetchDevices() {
  try {
    const devices = yield call(getDevice);
    yield put({ type: 'GET_DEVICES_SUCCESS', devices });
  } catch (e) {
    yield put({ type: 'GET_DEVICES_FAILED', message: e.message });
  }
}

function* deviceSaga() {
  yield takeEvery('GET_DEVICES_REQUESTED', fetchDevices);
}

export default deviceSaga;
