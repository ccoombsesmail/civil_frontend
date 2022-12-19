import { useMemo } from 'react'
import { useGetAllCommentsQuery, useGetCommentQuery } from '../../../api/services/comments.ts'
import { useGetTopicQuery } from '../../../api/services/topics.ts'
import { useGetAllTribunalCommentsBatchQuery } from '../../../api/services/tribunal_comments.ts'
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
  const { data: comments } = useGetAllCommentsQuery(subtopicId, {
    skip: !subtopicId || !currentUser,
  })
  const comment = comments?.find(
    (c) => c.data?.id === modalProps?.rootParentCommentId || modalProps?.commentId,
  )

  const { data: commentUnderReview } = useGetCommentQuery(modalProps?.tribunalCommentUnderReviewId, {
    skip: !currentUser,
  })
  const commentUnderReviewFormatted = {
    data: commentUnderReview,
    children: [],
  }

  const { data: tribunalComments } = useGetAllTribunalCommentsBatchQuery(modalProps?.tribunalCommentUnderReviewId, {
    skip: !modalProps?.tribunalCommentUnderReviewId || !currentUser,
  })
  const tribunalComment = tribunalComments?.find(
    (c) => c.data?.id === modalProps?.rootParentCommentId,
  )

  const { createdBy, createdByIconSrc, createdAt } = comment?.data || tribunalComment?.data || commentUnderReviewFormatted?.data || {}
  return useMemo(() => {
    const commentContent = modalProps?.replyType !== 'REPLY_FROM_TOPIC'
      ? findCommentContent(comment || tribunalComment || commentUnderReviewFormatted, modalProps?.commentId) : topic?.description
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
