import * as type from 'redux/types';

export function getDevicesAction() {
  return {
    type: type.GET_DEVICES_REQUESTED,
  };
}
