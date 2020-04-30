import {userReducer} from '../../hw1/src/user.reducer';
import {createStore} from 'redux';

const store = createStore(userReducer);

export default store;