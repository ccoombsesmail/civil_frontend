import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import uiActionCreators from '../../redux/actions/ui/index'

import { uuidRegEx } from '../../generic/regex/uuid'
import { REPLY } from '../App/Modal/Index'

export default (modalType) => {
  const { pathname } = useLocation()
  const subtopicId = pathname.match(uuidRegEx)?.[1]
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  return useCallback(() => {
    navigate(subtopicId, { type: modalType })
    openModal(REPLY)
  }, [])
}
