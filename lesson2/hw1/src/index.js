import store from './store'
import { addUser, deleteUser } from './users.actions'


store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addUser({id: 12, name: 'Ta'}));
store.dispatch(addUser({id: 22, name: 'Taras'}));
store.dispatch(deleteUser(22));
