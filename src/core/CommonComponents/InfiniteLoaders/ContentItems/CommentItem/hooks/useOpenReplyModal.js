import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import uiActionCreators from '../../../../../../redux/actions/ui/index'

import { REPLY } from '../../../../../App/Modal/Index'

export default (commentId, rootParentCommentId) => {
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  return useCallback(() => {
    openModal(REPLY, { replyType: 'COMMENT_REPLY', commentId, rootParentCommentId })
  }, [])
}
