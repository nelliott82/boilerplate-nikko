import { createStore } from 'redux';
import axios from 'axios';

const GET_COMPANIES = 'GET_COMPANIES';
export const getCompanies = companies => ({ type: GET_COMPANIES, companies });

export const companies = (state = [], action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return action.companies;
    default:
      return state;
  }
};

export const fetchAllCompanies = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/companies');
      dispatch(getCompanies(data));
    } catch (err) {
      console.log(err)
    }
  };
};

export const store = createStore(companies);
