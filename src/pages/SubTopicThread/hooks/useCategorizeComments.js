import { useMemo } from 'react'
import { useSelector } from 'react-redux'


const sentiments = new Set(['positive', 'neutral', 'negative'])

export default () => {
  const comments = useSelector((state) => state.comments.list)
  console.log(comments)
  return useMemo(() => {
    const categorizedComments = {
      positive: [],
      neutral: [],
      negative: [],
      all: comments,
    }
    
    for (const comment of comments) {
      if (sentiments.has(comment.sentiment)) {
        categorizedComments[comment.sentiment].push(comment)
      }
    }
    return categorizedComments
  }, [comments])
}