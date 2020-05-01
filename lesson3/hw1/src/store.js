import { createStore, combineReducers } from 'redux';
import { languageReducer } from './language.reducer';
import { cartReducer } from './cart.reducer';
import { userReducr } from './user.reducer';

const appReducer = combineReducers({
  language: languageReducer,
  cart: cartReducer,
  user: userReducr,
})

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;