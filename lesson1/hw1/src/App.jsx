import React, { Component } from "react";
import Header from "./Header";
import { userData, UserDataContext } from "./userData-context";

class App extends Component {
  state = {
    userDate: userData,
  };
  render() {
    return (
      <div className="page">
        <UserDataContext.Provider value={this.state.userDate}>
          <Header />
        </UserDataContext.Provider>
      </div>
    );
  }
}
export default App;
