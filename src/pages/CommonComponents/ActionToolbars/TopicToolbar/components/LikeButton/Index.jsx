import React, { useMemo, memo, useCallback} from 'react'
import IconButton from '../../../../IconButton/Index'
import { LikeClickedSvg, LikeSvg } from '../../../../../../svgs/svgs'
import useUpdateLikes from './hooks/useUpdateLikes'
import { useUpdateTopicLikesMutation } from '../../../../../../api/services/topics'

const LikeButton = ({ isLiked, topic, user }) => {
  // const updateLikes = useUpdateLikes(topic, user)
  const Icon = useMemo(() => (isLiked ? <LikeClickedSvg color="#F44336" /> : <LikeSvg />), [isLiked])
  return (
    <IconButton icon={Icon} onClick={onClick} />
  )
}

export default memo(LikeButton)
