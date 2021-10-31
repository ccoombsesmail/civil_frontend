import { OPEN_MODAL, CLOSE_MODAL, SHOW_SPINNER } from '../../reducers/ui_reducer'

export const showLoadingSpinnerAction = {
  type: SHOW_SPINNER,
  payload: true,
}

export const hideLoadingSpinnerAction = (dispatch) => setTimeout(() => dispatch({
  type: SHOW_SPINNER,
  payload: false,
}), 1000)

export const showLoadingSpinner = () => (dispatch) => {
  dispatch({
    type: SHOW_SPINNER,
    payload: true,
  })
}

export const hideLoadingSpinner = () => (dispatch) => {
  dispatch({
    type: SHOW_SPINNER,
    payload: false,
  })
}

export const closeModal = () => ({
  type: CLOSE_MODAL,
})

export const openModal = (modalType) => (dispatch) => {
  dispatch({
    type: OPEN_MODAL,
    payload: modalType,
  })
}

export default {
  closeModal,
  openModal,
  showLoadingSpinner,
  hideLoadingSpinner,
}
