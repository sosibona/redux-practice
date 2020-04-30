export const addUser = (data) => {
  return {
    type: 'ADD_USER',
    user: data,
  }
}

export const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    id,
  }
}