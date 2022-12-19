import React, { useMemo, memo } from 'react'
import IconButton from '../../../IconButton/Index'
import { DownVoteFill, DownVoteOutline } from '../../../../../svgs/svgs'
import useUpdateLikes from './hooks/useUpdateLikes'

const DownVoteButton = ({
  content, user, contentType, disabled,
}) => {
  const updateLikes = useUpdateLikes(content, user, contentType)
  const Icon = useMemo(() => (
    content?.likeState === -1 ? <DownVoteFill /> : <DownVoteOutline />), [content?.likeState])
  return (
    <IconButton icon={Icon} onClick={updateLikes} disabled={disabled} />
  )
}

export default memo(DownVoteButton)
