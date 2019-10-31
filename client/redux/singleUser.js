import { createStore } from 'redux';
import axios from 'axios';

const GET_SINGLE_USER = 'GET_SINGLE_USER';
export const getUser = user => ({ type: GET_SINGLE_USER, user });

export const singleUser = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.user;
    default:
      return state;
  }
};

export const fetchSingleUser = (id) => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      dispatch(getUser(data));
    } catch (err) {
      console.log(err)
    }
  };
};

export const store = createStore(singleUser);
