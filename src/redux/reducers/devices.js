import * as type from 'redux/types';

const initialState = {
  devices: [],
  loading: false,
  error: null,
};

export default function reducersDevice(state = initialState, action) {
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

    case type.DELETE_DEVICE_SUCCESS: {
      const { id } = action.id;
      return {
        devices: state.devices.filter((device) => device._id !== id),
        loading: false,
      };
    }
    case type.CREATE_DEVICE_SUCCESS:
      return {
        devices: [action.payload].concat(state.devices),
        loading: false,
      };

    case type.UPDATA_DEVICE_SUCCESS: {
      const driver = action.payload;
      return {
        devices: state.devices.map((e) => {
          if (e._id === driver._id) {
            return { ...e, ...driver };
          }
          return e;
        }),
        loading: false,
      };
    }

    case type.CREATE_DEVICE_FAILED:
    case type.DELETE_DEVICE_FAILED:
    case type.UPDATA_DEVICE_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
