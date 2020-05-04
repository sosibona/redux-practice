import React, { Component } from "react";
import Pagination from "./Pagination";
import User from "./User";
import { connect } from "react-redux";
import * as paginationActions from "./user.actions";
import {usersListSelectors, currnetPageSelectors} from './user.selectors'

const UserList = ({ users, goNext, goPrev, currentPage, itemsPerPage }) => {
  const displayUsers = users.slice(
    currentPage * 3,
    currentPage * 3 + 3
  );
  const userList = displayUsers.map((user) => <User key={user.id} {...user} />);
  return (
    <div>
      <Pagination
        goNext={goNext}
        goPrev={goPrev}
        totalItems={users.length}
        currentPage={currentPage}

      />
      <ul className="users">{userList}</ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: usersListSelectors(state),
    currentPage: currnetPageSelectors(state),
  };
};

const mapDispatch = {
  goNext: paginationActions.goNext,
  goPrev: paginationActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

export default connector(UserList);
