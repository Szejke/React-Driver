import { createSelector } from 'reselect';

const getDevices = (state) => {
  return state.devices;
};

export const getDevice = createSelector([getDevices], (state) => {
  return state;
});
