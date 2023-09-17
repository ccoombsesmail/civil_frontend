import React, { memo } from 'react'
import { OpposingViewsSvg } from '../../../../../../svgs/svgs'

function OpposingViewsButton({ spaceId, discussionId }) {
  return (
    <OpposingViewsSvg onClick={(e) => e.stopPropagation()} />
  )
}

export default memo(OpposingViewsButton)
