import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import uiActionCreators from '../../redux/actions/ui/index'

import { REPLY } from '../App/Modal/Index'
import { uuidRegEx } from '../../generic/regex/uuid'

export default (modalType, modalProps) => {
  const { pathname } = useLocation()
  const discussionId = pathname.match(uuidRegEx)?.[1]
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  return useCallback(() => {
    openModal(REPLY, modalProps)
  }, [])
}
