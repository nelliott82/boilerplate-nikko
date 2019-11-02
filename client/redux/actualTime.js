import { createStore } from 'redux';
import axios from 'axios';

const GET_ACTUAL_TIME = 'GET_ACTUAL_TIME';
export const getActualTime = actualTime => ({ type: GET_ACTUAL_TIME, actualTime });

export const actualTime = (state = [], action) => {
  switch (action.type) {
    case GET_ACTUAL_TIME:
      return action.actualTime;
    default:
      return state;
  }
};

export const fetchActualTime = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/actualtime');
      dispatch(getActualTime(data));
    } catch (err) {
      console.log(err)
    }
  };
};

export const store = createStore(actualTime);
