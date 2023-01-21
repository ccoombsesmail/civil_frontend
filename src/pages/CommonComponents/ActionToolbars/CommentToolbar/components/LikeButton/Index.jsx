import React, { useMemo, memo } from 'react'
import IconButton from '../../../../IconButton/Index'
import { LikeClickedSvg, LikeSvg } from '../../../../../../svgs/svgs'
import useUpdateLikes from './hooks/useUpdateLikes'

const LikeButton = ({ isLiked, topic, user }) => {
  const updateLikes = useUpdateLikes(topic, user)
  const Icon = useMemo(() => (isLiked ? <LikeClickedSvg color="#F44336" /> : <LikeSvg />), [isLiked])
  return (
    <IconButton icon={Icon} onClick={updateLikes} />
  )
}

export default memo(LikeButton)
