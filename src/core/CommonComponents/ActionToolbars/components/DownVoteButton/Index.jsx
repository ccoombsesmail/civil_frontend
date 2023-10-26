import React, { useMemo, memo, useCallback } from 'react'
import { DislikedState } from '../../../../../enums/like_state'

function DownVoteButton({
  content, disabled, updateLikes,
}) {
  const onClick = useCallback((e) => {
    e.stopPropagation()
    if (!disabled) updateLikes()
  }, [disabled, updateLikes])
  const outline = <img  onClick={onClick} src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/disagree-outline.png" alt="" />
  const fill = <img  onClick={onClick} src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/disagree-fill.png" alt="" />
  const Icon = useMemo(() => (
    content?.likeState === DislikedState ? fill : outline), [content?.likeState, disabled, updateLikes])
  return (
    <>
      {Icon}
    </>
  )
}

export default memo(DownVoteButton)
