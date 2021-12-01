/* eslint-disable import/prefer-default-export */
export const addUser = (action, state) => {
  const userIdx = state.list.findIndex((u) => u.id === action.payload.clerkId)
  if (userIdx !== -1) {
    return { ...state, list: [...state.list.filter((_, idx) => idx !== userIdx), action.payload] }
  }
  return { ...state, list: [...state.list, action.payload] }
}
