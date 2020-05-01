import store from './store';
import {increment} from './counter.actions';
import { addUser, updateUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addUser({id: 21, name: 'James'}));
store.dispatch(addUser({id: 20, name: 'Tom'}));
store.dispatch(updateUser(21, {age: 22}));
store.dispatch(deleteUser(20));