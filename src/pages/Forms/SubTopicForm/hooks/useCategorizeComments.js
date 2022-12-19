import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const sentiments = new Set(['POSITIVE', 'NEUTRAL', 'NEGATIVE'])

export default () => {
  const comments = useSelector((state) => state.comments.list)
  return useMemo(() => {
    const categorizedComments = {
      POSITIVE: [],
      NEUTRAL: [],
      NEGATIVE: [],
      all: comments,
    }
    comments.forEach((comment) => {
      if (sentiments.has(comment.data?.sentiment)) {
        categorizedComments[comment.data?.sentiment].push(comment)
      }
    })
    return categorizedComments
  }, [comments])
}
