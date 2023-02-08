import React, { memo } from 'react'
import { OpposingViewsSvg } from '../../../../../../svgs/svgs'
import useOpenModal from '../../../../../hooks/useOpenModal'
import { OPPOSING_REC_FORM } from '../../../../../App/Modal/Index'

const OpposingViewsButton = ({ topicId, discussionId }) => {
  const openModal = useOpenModal(OPPOSING_REC_FORM, { topicId, discussionId })
  return (
    <OpposingViewsSvg onClick={openModal} />
  )
}

export default memo(OpposingViewsButton)
