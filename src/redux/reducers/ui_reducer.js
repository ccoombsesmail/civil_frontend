export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SHOW_SPINNER = 'SHOW_SPINNER'

const reducer = (state = { modalOpen: false, loadingSpinner: { isOpen: false } }, action) => {
  switch (action.type) {
    case 'SHOW_SPINNER':
      return { ...state, loadingSpinner: { isOpen: action.payload } }
    case 'OPEN_MODAL':
      return { ...state, modalOpen: true, modalType: action.payload }
    case 'CLOSE_MODAL':
      return { ...state, modalOpen: false }
    default:
      return state
  }
}

export default reducer
