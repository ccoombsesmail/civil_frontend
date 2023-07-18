import React, { memo } from 'react'
import { OpposingViewsSvg } from '../../../../../../svgs/svgs'
import useOpenModal from '../../../../../hooks/useOpenModal'

const OPPOSING_REC_FORM = 'OPPOSING_REC_FORM'

function OpposingViewsButton({ spaceId, discussionId }) {
  const openModal = useOpenModal(OPPOSING_REC_FORM, { spaceId, discussionId })
  return (
    <OpposingViewsSvg onClick={openModal} />
  )
}

export default memo(OpposingViewsButton)
