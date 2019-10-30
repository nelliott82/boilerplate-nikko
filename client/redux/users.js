import { createStore } from 'redux';

const GET_USERS = 'GET_USERS';
export const getUsers = users => ({ type: GET_USERS, users });

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
};

export const store = createStore(userReducer);
