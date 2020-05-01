import store from './store';
import {increment} from './counter.actions';
import { addUser, updateUser } from './users.actions';

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addUser({id: 21, name: 'James'}));
store.dispatch(updateUser(21, {age: 22}));