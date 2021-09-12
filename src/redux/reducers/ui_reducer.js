export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

const reducer = (state = { modalOpen: false }, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, modalOpen: true, modalType: action.payload }
    case 'CLOSE_MODAL':
      return { ...state, modalOpen: false }
    default:
      return state
  }
}

export default reducer
