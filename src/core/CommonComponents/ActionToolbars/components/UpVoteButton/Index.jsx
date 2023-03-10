import React, { useMemo, memo } from 'react'
import IconButton from '../../../IconButton/Index'
// import { UpVoteFill, UpVoteOutline } from '../../../../../svgs/svgs'
import useUpdateLikes from './hooks/useUpdateLikes'

function UpVoteButton({
  content, user, contentType, disabled,
}) {
  const updateLikes = useUpdateLikes(content, user, contentType)
  const outline = <img src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/agree-outline.png" alt="" />
  const fill = <img src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/agree-fill.png" alt="" />
  const Icon = useMemo(() => (
    content?.likeState === 1 ? fill : outline), [content?.likeState])
  return (
    <IconButton icon={Icon} onClick={updateLikes} disabled={disabled} />
  )
}

export default memo(UpVoteButton)
