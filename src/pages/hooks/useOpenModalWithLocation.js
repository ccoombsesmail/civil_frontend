import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import uiActionCreators from '../../redux/actions/ui/index'

import { REPLY } from '../App/Modal/Index'
import { uuidRegEx } from '../../generic/regex/uuid'

export default (replyType) => {
  const { pathname } = useLocation()
  const subtopicId = pathname.match(uuidRegEx)?.[1]
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  return useCallback(() => {
    // navigate(loc.pathname, { state: { type: modalType } })
    openModal(REPLY, { replyType, subtopicId })
  }, [])
}
