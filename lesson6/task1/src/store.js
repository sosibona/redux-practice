import { counterReducer } from "./counter.reducer";
import {createStore, applyMiddleware} from 'redux';

const logger = state => next => action => {
  console.group(action.type);
  console.info(action);
  const result = next(action);
  console.log('new state', store.getState())
  console.groupEnd()
  return result;
}

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;