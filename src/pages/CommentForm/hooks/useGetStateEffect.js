import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const findCommentContent = (comment, id) => {
  const visited = new Set()
  const q = [comment]
  while (q.length !== 0) {
    const currNode = q.shift()
    visited.add(currNode.data.id)
    if (currNode.data.id === id) return currNode.data.content
    currNode.children.forEach((child) => {
      if (!visited.has(child.data.id)) q.push(child)
    })
  }
  return ''
}

export default (topicId, subtopicId, locationState) => {
  const user = useSelector((s) => s.session.currentUser)
  const topic = useSelector((s) => s.topics.list)?.find((t) => t.id === topicId)
  const comment = useSelector((s) => s.comments.list)?.find(
    (c) => c.data.id === locationState?.rootParentCommentId,
  )
  return useMemo(() => {
    const commentContent = locationState?.type !== 'TOPIC_REPLY'
      ? findCommentContent(comment, locationState?.commentId) : topic?.description
    return {
      subtopicId,
      createdByIconSrc: comment?.iconSrc || topic?.createdByIconSrc,
      username: user?.username,
      createdBy: comment?.createdBy || topic?.createdBy,
      time: comment?.createdAt || topic?.createdAt,
      htmlContent: commentContent,
      rootParentCommentId: locationState?.rootParentCommentId || null,
      type: locationState?.type,
    }
  }, [topic, user, comment, subtopicId, locationState])
}
