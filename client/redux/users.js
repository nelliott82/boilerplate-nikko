import { createStore } from 'redux';
import axios from 'axios';

const GET_USERS = 'GET_USERS';
export const getUsers = users => ({ type: GET_USERS, users });

export const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
};

export const fetchAllUsers = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/users');
      dispatch(getUsers(data));
    } catch (err) {
      console.log(err)
    }
  };
};

export const store = createStore(users);
