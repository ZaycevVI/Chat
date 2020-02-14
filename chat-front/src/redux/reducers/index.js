import { combineReducers } from 'redux'
import sidebarReducer from './sidebar';
import messageReducer from './message';

export default combineReducers({
    sidebarReducer,
    messageReducer
  })