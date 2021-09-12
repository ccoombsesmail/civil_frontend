import { OPEN_MODAL, CLOSE_MODAL } from '../../reducers/ui_reducer'

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
}
