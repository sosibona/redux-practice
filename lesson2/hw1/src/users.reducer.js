import { addUser, deleteUser } from './users.actions'

const initialState = {
  usersList: []
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, {
        usersList: [
          ...state.usersList,
          {
            id: action.user.id,
            name: action.user.name,
          }
        ]
      })
    case 'DELETE_USER':
      const updateList = state.usersList.filter(user => user.id !== action.id)
      return {
        usersList: updateList,
      }
      default: 
      return state;
  }
}