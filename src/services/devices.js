import axios from 'axios';

const url = 'http://localhost:8080/device/';

export function getDevice() {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export function deleteDeviceFromApi({ id }) {
  axios.delete(`${url}${id}`);
}

export function createDeviceFromApi({ payload }) {
  axios.post(url, payload);
}
