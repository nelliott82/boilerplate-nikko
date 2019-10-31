import { createStore, applyMiddleware } from 'redux';
import reduxReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  reduxReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;
