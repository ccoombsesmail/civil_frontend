import React, { useMemo, memo } from 'react'
import IconButton from '../../../../IconButton/Index'
import { UpVoteFill, UpVoteOutline } from '../../../../../../svgs/svgs'
import useUpdateLikes from './hooks/useUpdateLikes'

const UpVoteButton = ({ topic, user }) => {
  const updateLikes = useUpdateLikes(topic, user)
  const Icon = useMemo(() => (
    topic?.likeState === 1 ? <UpVoteFill /> : <UpVoteOutline />), [topic?.likeState])
  return (
    <IconButton icon={Icon} onClick={updateLikes} />
  )
}

export default memo(UpVoteButton)
