import React, { Component } from "react";
import SearchField from "./users/SearchField";
import UserInfo from "./users/UserInfo";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  state = {
    userData: null,
  };

  onShowUser = (userName) => {
    this.setState({
      isFetching: true,
    });
    
  };
  render() {
    return (
      <Provider store={store}>
        <div className="page">
          {/* <Spinner /> */}
          <UserInfo />
          <SearchField onShowUser={this.onShowUser} />
        </div>
      </Provider>
    );
  }
}
export default App;
