import React, { Component } from "react";
import UserList from "./users/UsersList";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UserList />
      </Provider>
    );
  }
}
export default App;
