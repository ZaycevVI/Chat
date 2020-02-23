import { combineReducers } from 'redux'
import sidebarReducer from './sidebar';
import messageReducer from './message';
import authReducer from './auth';
import errorReducer from './error';

export default combineReducers({
    sidebarReducer,
    messageReducer,
    authReducer,
    errorReducer
  })