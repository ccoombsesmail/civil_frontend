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

export default (topicId, subtopicId, modalProps) => {
  const user = useSelector((s) => s.session.currentUser)
  const topic = useSelector((s) => s.topics.list)?.find((t) => t.id === topicId)
  const comment = useSelector((s) => s.comments.list)?.find(
    (c) => c.data?.id === modalProps?.rootParentCommentId,
  )
  return useMemo(() => {
    console.log(comment)
    const commentContent = modalProps?.replyType !== 'REPLY_FROM_TOPIC'
      ? findCommentContent(comment, modalProps?.commentId) : topic?.description
    return {
      subtopicId,
      createdByIconSrc: comment?.iconSrc || topic?.createdByIconSrc,
      username: user?.username,
      createdBy: comment?.createdBy || topic?.createdBy,
      time: comment?.createdAt || topic?.createdAt,
      htmlContent: commentContent,
      rootParentCommentId: modalProps?.rootParentCommentId || null,
      type: modalProps?.replyType,
    }
  }, [topic, user, comment, subtopicId, modalProps])
}
