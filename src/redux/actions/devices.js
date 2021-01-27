import * as type from 'redux/types';

export function getDevicesAction() {
  return {
    type: type.GET_DEVICES_REQUESTED,
  };
}

export function removeDeviceAction(id) {
  return {
    type: type.DELETE_DEVICE_REQUESTED,
    id,
  };
}

export function createDeviceAction(deviceContent) {
  return {
    type: type.CREATE_DEVICE_REQUESTED,
    ...deviceContent,
  };
}

export function updateDeviceAction(deviceContent) {
  return {
    type: type.UPDATA_DEVICE_REQUESTED,
    ...deviceContent,
  };
}

export function findDeviceAction(id) {
  return {
    type: type.FIND_DEVICE,
    id,
  };
}
