import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useGetAllCommentsQuery } from '../../../../../../api/services/comments'

const sentiments = new Set(['POSITIVE', 'NEUTRAL', 'NEGATIVE'])

export default (subTopicId, currentUser) => {
  const {data: comments, isLoading, isUninitialized} = useGetAllCommentsQuery(subTopicId, {
    skip: !subTopicId || !currentUser
  })
  return useMemo(() => {
    const categorizedComments = {
      POSITIVE: [],
      NEUTRAL: [],
      NEGATIVE: [],
      all: comments,
    }
    comments?.forEach((comment) => {
      if (sentiments.has(comment.data?.sentiment)) {
        categorizedComments[comment.data?.sentiment].push(comment)
      }
    })
    return {categorizedComments, isLoading, isUninitialized}
  }, [comments, isLoading, isUninitialized])
}
