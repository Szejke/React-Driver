import * as type from 'redux/types';

const initialState = {
  devices: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_DEVICES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_DEVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        devices: action.devices,
      };
    case type.GET_DEVICES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
