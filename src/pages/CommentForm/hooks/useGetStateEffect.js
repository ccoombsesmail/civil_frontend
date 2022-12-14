import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useGetAllCommentsQuery } from '../../../api/services/comments'
import { useGetTopicQuery } from '../../../api/services/topics'
import useGetCurrentUser from '../../App/hooks/useGetCurrentUser'

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
  const { currentUser } = useGetCurrentUser()

  const { data: topic } = useGetTopicQuery(topicId)
  const { data: comments } = useGetAllCommentsQuery(subtopicId)
  const comment = comments?.find(
    (c) => c.data?.id === modalProps?.rootParentCommentId || modalProps?.commentId,
  )
  // const tribunalComment = useSelector((s) => s.tribunalComments.list)?.find(
  //   (c) => c.data?.id === modalProps?.rootParentCommentId,
  // )

  const { createdBy, createdByIconSrc, createdAt } = comment?.data || {} || {}
  return useMemo(() => {
    const commentContent = modalProps?.replyType !== 'REPLY_FROM_TOPIC'
      ? findCommentContent(comment || tribunalComment, modalProps?.commentId) : topic?.description
    return {
      subtopicId,
      createdByIconSrc: createdByIconSrc || topic?.createdByIconSrc,
      username: currentUser?.username,
      createdBy: createdBy || topic?.createdByUsername,
      time: createdAt || topic?.createdAt,
      htmlContent: commentContent,
      rootParentCommentId: modalProps?.rootParentCommentId || null,
      type: modalProps?.replyType,
    }
  }, [topic, currentUser, comment, subtopicId, modalProps])
}
