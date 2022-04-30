export const getAllTribunalComments = (action, state) => ({
  ...state,
  list: action.payload.comments,
})

export const getAllTribunalCommentsBatch = (action, state) => ({
  ...state,
  list: action.payload,
})
