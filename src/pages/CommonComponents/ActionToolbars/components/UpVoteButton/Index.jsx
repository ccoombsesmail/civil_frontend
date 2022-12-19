import React, { useMemo, memo } from 'react'
import IconButton from '../../../IconButton/Index'
import { UpVoteFill, UpVoteOutline } from '../../../../../svgs/svgs'
import useUpdateLikes from './hooks/useUpdateLikes'

const UpVoteButton = ({
  content, user, contentType, disabled,
}) => {
  const updateLikes = useUpdateLikes(content, user, contentType)
  const Icon = useMemo(() => (
    content?.likeState === 1 ? <UpVoteFill /> : <UpVoteOutline />), [content?.likeState])
  return (
    <IconButton icon={Icon} onClick={updateLikes} disabled={disabled} />
  )
}

export default memo(UpVoteButton)
