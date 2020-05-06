import React, { Component } from "react";
import SearchField from "./users/SearchField";
import UserInfo from "./users/UserInfo";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="page">
          <UserInfo />
          <SearchField />
        </div>
      </Provider>
    );
  }
}
export default App;
