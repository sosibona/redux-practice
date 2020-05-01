import {counterReducer} from './counter.reducer';
import usersReducer from './users.reducer'
import {createStore, combineReducers} from 'redux';

const appReducer = combineReducers({
  counter: counterReducer,
  usersList: usersReducer,
})

const store = createStore(appReducer)

export default store;