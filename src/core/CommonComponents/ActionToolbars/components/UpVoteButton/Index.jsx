import React, { useMemo, memo } from 'react'
import IconButton from '../../../IconButton/Index'
import useUpdateLikes from './hooks/useUpdateLikes'
import { LikedState } from '../../../../../enums/like_state'

function UpVoteButton({
  content, user, contentType, disabled, currentPage, updateLikes
}) {
  // const updateLikes = useUpdateLikes(content, user, contentType, currentPage)
  const outline = <img src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/agree-outline.png" alt="" />
  const fill = <img src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/agree-fill.png" alt="" />
  const Icon = useMemo(() => (
    content?.likeState === LikedState ? fill : outline), [content?.likeState])
  return (
    <IconButton icon={Icon} onClick={updateLikes} disabled={disabled} />
  )
}

export default memo(UpVoteButton)
