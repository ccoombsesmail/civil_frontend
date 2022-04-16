import React, { useMemo, memo } from 'react'
import IconButton from '../../../../IconButton/Index'
import { DownVoteFill, DownVoteOutline } from '../../../../../../svgs/svgs'
import useUpdateLikes from './hooks/useUpdateLikes'

const DownVoteButton = ({ topic, user }) => {
  const updateLikes = useUpdateLikes(topic, user)
  const Icon = useMemo(() => (
    topic?.likeState === -1 ? <DownVoteFill /> : <DownVoteOutline />), [topic?.likeState])
  return (
    <IconButton icon={Icon} onClick={updateLikes} />
  )
}

export default memo(DownVoteButton)
