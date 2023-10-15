import React, { memo } from 'react'
import { OpposingViewsSvg } from '../../../../../../svgs/svgs'
import useOpenModal from '../../../../../hooks/useOpenModal'

const OPPOSING_REC_FORM = 'OPPOSING_REC_FORM'

function OpposingViewsButton({ spaceId, discussionId }) {
  const openModal = useOpenModal(OPPOSING_REC_FORM, { spaceId, discussionId })
  return (
    <div className='flex align-items-center'>
      <OpposingViewsSvg onClick={openModal} />
    </div>
  )
}

export default memo(OpposingViewsButton)
