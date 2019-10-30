import { combineReducers } from 'redux';
import { userReducer } from './users';

const reduxReducer = combineReducers({
  userReducer,
});

export default reduxReducer;
