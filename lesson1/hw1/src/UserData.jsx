import React from "react";
import { UserDataContext } from "./userData-context";

class UserData extends React.Component {
  render() {
    console.log(this.context)
    return (
      <div className="menu">
        <span className="menu__greeting">Hello, {this.context.name}</span>
        <img
          alt="User Avatar"
          src={this.context.avatar_url}
          className="menu__avatar"
        />
      </div>
    );
  }
}

UserData.contextType = UserDataContext;

export default UserData;
