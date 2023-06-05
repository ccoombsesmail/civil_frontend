import React, { useMemo, memo } from 'react'
import IconButton from '../../../IconButton/Index'
// import { DownVoteFill, DownVoteOutline } from '../../../../../svgs/svgs'
import { DislikedState } from '../../../../../enums/like_state'

function DownVoteButton({
  content, disabled, updateLikes,
}) {
  const outline = <img src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/disagree-outline.png" alt="" />
  const fill = <img src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/disagree-fill.png" alt="" />
  const Icon = useMemo(() => (
    content?.likeState === DislikedState ? fill : outline), [content?.likeState])
  return (
    <IconButton icon={Icon} onClick={updateLikes} disabled={disabled} />
  )
}

export default memo(DownVoteButton)
