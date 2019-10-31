import { combineReducers } from 'redux';
import { users } from './users';
import { singleUser } from './singleUser';
import { companies } from './companies';
import { processes } from './processes';

const reduxReducer = combineReducers({
  users,
  singleUser,
  companies,
  processes
});

export default reduxReducer;
