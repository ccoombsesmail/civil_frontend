import { useMemo } from 'react'

const commentType = new Set(['Defendant', 'Reporter', 'Jury'])

export default (tribunalComments) => useMemo(() => {
  const categorizedComments = {
    Defendant: [],
    Reporter: [],
    Jury: [],
    General: [],
    all: tribunalComments,
  }
  tribunalComments?.forEach((comment) => {
    if (commentType.has(comment.data?.commentType)) {
      categorizedComments[comment.data?.commentType].push(comment)
    }
  })
  return categorizedComments
}, [tribunalComments])
