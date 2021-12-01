import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import uiActionCreators from '../../redux/actions/ui/index'

import { REPLY } from '../App/Modal/Index'

export default (modalType) => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  return useCallback(() => {
    navigate(params['*'], { state: { type: modalType } })
    openModal(REPLY)
  }, [])
}
