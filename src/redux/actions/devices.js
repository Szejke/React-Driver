import * as type from 'redux/types';

export function getDevicesAction() {
  return {
    type: type.GET_DEVICES_REQUESTED,
  };
}

export function removeDevicesAction(id) {
  console.log('czesc');
  return {
    type: type.DELETE_DEVICES_REQUESTED,
    id,
  };
}
