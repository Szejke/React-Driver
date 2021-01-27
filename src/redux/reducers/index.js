import { combineReducers } from 'redux';
import devices from './devices';

const rootReducer = combineReducers({
  devices,
});

export default rootReducer;
