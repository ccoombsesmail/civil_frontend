import { useMemo } from 'react'

const sentiments = new Set(['POSITIVE', 'NEUTRAL', 'NEGATIVE'])

export default (comments) => useMemo(() => {
  const categorizedComments = {
    POSITIVE: [],
    NEUTRAL: [],
    NEGATIVE: [],
    all: comments,
  }
  // if (!comments) return { categorizedComments }
  comments?.forEach((comment) => {
    if (sentiments.has(comment.data?.sentiment)) {
      categorizedComments[comment.data?.sentiment].push(comment)
    }
  })
  return categorizedComments
}, [comments])
