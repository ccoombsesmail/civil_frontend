import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import uiActionCreators from '../../redux/actions/ui/index'

export default (modalType, modalProps) => {
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  return useCallback(() => {
    openModal(modalType, modalProps)
  }, [modalType, modalProps])
}
