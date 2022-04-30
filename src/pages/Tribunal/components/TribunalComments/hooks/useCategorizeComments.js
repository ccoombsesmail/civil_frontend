import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const commentType = new Set(['Defendant', 'Reporter', 'Jury', 'General'])

export default () => {
  const comments = useSelector((state) => state.tribunalComments.list)
  return useMemo(() => {
    const categorizedComments = {
      Defendant: [],
      Reporter: [],
      Jury: [],
      General: [],
      all: comments,
    }
    comments.forEach((comment) => {
      if (commentType.has(comment.data?.commentType)) {
        categorizedComments[comment.data?.commentType].push(comment)
      }
    })
    return categorizedComments
  }, [comments])
}
