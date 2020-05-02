import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from './users.actions'

class Users extends Component {

  onCreateUser = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`
    }
    this.props.createUser(newUser)
  }

  // onDeleteUser = userId => {
  //   this.props.deleteUser(userId)
  // }

  render() {
    const {users, deleteUser} = this.props;
    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.onCreateUser}>Create user</button>
        <ul className="users__list">
          {users.map(user => (
            <li key={user.id} className="users__list-item">
            <span>{user.name}</span>
            <button className="users__delete-btn" onClick={() => deleteUser(user.id)}>+</button>
          </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users.usersList
  }
}

const mapDispatch = {
  createUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
}

const connector = connect(mapState, mapDispatch);

export default connector(Users);
