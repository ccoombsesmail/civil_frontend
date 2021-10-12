export const GET_ALL_ENUMS = 'GET_ALL_ENUMS'


const reducer = (state = { topicCategories: []}, action) => {
  switch (action.type) {
     case GET_ALL_ENUMS:
      return { topicCategories: action.payload }
    default:
      return state
  }
}

export default reducer
