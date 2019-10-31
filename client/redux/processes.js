import { createStore } from 'redux';
import axios from 'axios';

const GET_PROCESSES = 'GET_PROCESSES';
export const getProcesses = processes => ({ type: GET_PROCESSES, processes });

export const processes = (state = [], action) => {
  switch (action.type) {
    case GET_PROCESSES:
      return action.processes;
    default:
      return state;
  }
};

export const fetchAllProcesses = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/processes');
      dispatch(getProcesses(data));
    } catch (err) {
      console.log(err)
    }
  };
};

export const store = createStore(processes);
