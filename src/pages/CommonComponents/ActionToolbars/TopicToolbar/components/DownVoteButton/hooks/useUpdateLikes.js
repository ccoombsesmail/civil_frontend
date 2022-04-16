import { useCallback } from 'react'
import useBindDispatch from '../../../../../../hooks/redux/useBindDispatch'
import topicActionCreators from '../../../../../../../redux/actions/topics'

export default (topic, user) => {
  const { updateTopicLikes } = useBindDispatch(topicActionCreators)
  return useCallback(() => {
    let value
    switch (topic.likeState) {
      case -1:
        value = 0
        break
      case 0:
        value = -1
        break
      case 1:
        value = -1
        break
      default:
        break
    }
    updateTopicLikes({
      id: topic?.id,
      userId: user?.userId,
      value,
    })
  }, [topic])
}
