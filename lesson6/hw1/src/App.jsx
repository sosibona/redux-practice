import React, { Component } from "react";
import Weather from "./weather/Weather";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Weather />
      </Provider>
    );
  }
}
export default App;
