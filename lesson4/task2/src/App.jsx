import React, { Component } from "react";
import Users from "./users/Users";
import { Provider } from "react-redux";
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Users />
      </Provider>
    );
  }
}
export default App;
