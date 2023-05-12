export const GET_ALL_ENUMS = 'GET_ALL_ENUMS'


const reducer = (state = { spaceCategories: []}, action) => {
  switch (action.type) {
     case GET_ALL_ENUMS:
      return { spaceCategories: action.payload }
    default:
      return state
  }
}

export default reducer
