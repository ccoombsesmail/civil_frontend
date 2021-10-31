import { useCallback } from 'react'
import useBindDispatch from './redux/useBindDispatch'
import topicActionCreators from '../../redux/actions/topics'

export default (topic, user) => {
  const { updateTopicLikes } = useBindDispatch(topicActionCreators)

  return useCallback(() => {
    updateTopicLikes({
      id: topic?.id,
      userId: user?.id,
      increment: !topic?.liked,
    })
  }, [topic])

}