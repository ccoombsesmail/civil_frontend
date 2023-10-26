import React, { useMemo, memo, useCallback } from 'react'
import { LikedState } from '../../../../../enums/like_state'

function UpVoteButton({
  content, disabled, updateLikes,
}) {
  const onClick = useCallback((e) => {
    e.stopPropagation()
    if (!disabled) updateLikes()
  }, [disabled, updateLikes])
  const outline = <img onClick={onClick} src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/agree-outline.png" alt="" />
  const fill = <img onClick={onClick} src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/agree-fill.png" alt="" />
  const Icon = useMemo(() => (
    content?.likeState === LikedState ? fill : outline), [content?.likeState, disabled, updateLikes])
  return (
    <>
    {Icon}
    </>
  )
}

export default memo(UpVoteButton)
