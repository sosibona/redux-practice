import { counterReducer } from './counter.reducer';
import usersReducer from './users.reducer'
import { createStore, combineReducers } from 'redux';

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
})

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;