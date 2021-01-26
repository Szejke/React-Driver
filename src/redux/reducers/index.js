import { combineReducers } from 'redux';
import devices from './devices';

const rootReducer = combineReducers({
  devices: devices,
});

export default rootReducer;
