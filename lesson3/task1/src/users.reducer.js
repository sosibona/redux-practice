import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users.actions";

const initialState = {
  userList: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        userList: state.userList.concat(action.payload.userData),
      }
    }
    case DELETE_USER: {
      const newUserList = state.userList.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        userList: newUserList,
      }
    }
    case UPDATE_USER: {
      const newUserList = state.userList.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          }
        }
      })
      return {
        ...state,
        userList: newUserList,
      }
    }
    default:
      return state;
  }
}

export default usersReducer;