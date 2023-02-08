import { useCallback } from 'react'
import { useGetAllCommentsQuery } from '../../../../../../../api/services/comments.ts'
import { useGetAllTribunalCommentsBatchQuery } from '../../../../../../../api/services/tribunal_comments.ts'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'

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

export default (commentData, contentId, topicId) => {
  const rootCommentId = commentData.rootId || commentData.id
  const { currentUser } = useGetCurrentUser()
  const { data: comments } = useGetAllCommentsQuery(commentData.discussionId, {
    skip: !commentData || !currentUser,
  })

  const { data: tribunalComments } = useGetAllTribunalCommentsBatchQuery(contentId, {
    skip: !contentId || !currentUser,
  })

  const { createdBy, createdByIconSrc, createdAt } = commentData || {}
  return useCallback(() => {
    const rootComment = comments?.find(
      (c) => c.data.id === rootCommentId,
    )
    const tribunalRootComment = tribunalComments?.find(
      (c) => c.data?.id === rootCommentId,
    )

    if (!rootComment && !tribunalRootComment) return null
    const commentContent = findCommentContent(rootComment || tribunalRootComment, commentData.id)
    let lexicalContent
    try {
      lexicalContent = JSON.parse(commentContent)
    } catch {
      lexicalContent = commentContent
    }
    return {
      contentId: commentData.discussionId || contentId,
      discussionId: commentData.discussionId,
      topicId: topicId || contentId,
      createdByIconSrc,
      username: currentUser?.username,
      createdBy,
      time: createdAt,
      lexicalRawContent: lexicalContent,
      parentId: commentData.id || null,
      rootId: rootCommentId,
    }
  }, [currentUser, commentData, contentId])
}
