import { counterReducer } from "./counter/counter.reducer";
import {createStore, combineReducers} from 'redux';
import { usersReducer } from "./users/users.reducer";

const appReducer = combineReducers({
  users: usersReducer,
  counter: counterReducer,
})

const store = createStore(appReducer);

export default store;