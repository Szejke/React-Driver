import * as type from 'redux/types';

const initialState = {
  devices: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case type.GET_DEVICES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_DEVICES_SUCCESS:
      console.log('czesc GET_DEVICES_SUCCESSs');
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

    case type.DELETE_DEVICES_SUCCESS: {
      console.log('czesc DELETE_DEVICES_SUCCESS', action.id);
      console.log('czesc DELETE_DEVICES_SUCCESS', state.devices.id);
      console.log('czesc DELETE_DEVICES_SUCCESS', action.id);
      const deviceId = action.id;
      return {
        items: state.devices.filter((device) => device._id !== deviceId),
        loading: false,
      };
    }
    case type.CREATE_DEVICES_SUCCESS:
      return {
        items: [action.payload].concat(state.items),
        loading: false,
      };
    case type.UPDATA_DEVICES_SUCCESS: {
      const { id, ...rest } = action.payload;

      return {
        items: state.items.map((post) => {
          if (post.id === id) {
            return { ...post, ...rest };
          }
          return post;
        }),
        loading: false,
      };
    }
    case type.CREATE_DEVICES_FAILED:
    case type.DELETE_DEVICES_FAILED:
    case type.UPDATA_DEVICES_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
