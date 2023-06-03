import React, { memo } from 'react'
import { OpposingViewsSvg } from '../../../../../../svgs/svgs'
import useOpenModal from '../../../../../hooks/useOpenModal'
import { OPPOSING_REC_FORM } from '../../../../../App/Modal/Index'

function OpposingViewsButton({ spaceId, discussionId }) {
  const openModal = useOpenModal(OPPOSING_REC_FORM, { spaceId, discussionId })
  return (
    <div>
      <OpposingViewsSvg onClick={openModal} />
    </div>
  )
}

export default memo(OpposingViewsButton)
