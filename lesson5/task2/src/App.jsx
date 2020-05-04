import React, { Component } from "react";
import TransferList from "./options/TransferList";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TransferList />
      </Provider>
    );
  }
}
export default App;
