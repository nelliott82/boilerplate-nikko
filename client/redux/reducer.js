import { combineReducers } from 'redux';
import { users } from './users';
import { singleUser } from './singleUser';
import { companies } from './companies';
import { processes } from './processes';
import { actualTime } from './actualTime';

const reduxReducer = combineReducers({
  users,
  singleUser,
  companies,
  processes,
  actualTime
});

export default reduxReducer;
