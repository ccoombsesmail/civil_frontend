import { useMemo, useContext } from 'react'
import {
  useGetAllCommentsQuery,
  useGetAllCommentRepliesQuery,
} from '../../../../../../../api/services/comments.ts'
import { useGetAllTribunalCommentsQuery } from '../../../../../../../api/services/tribunal_comments.ts'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'
import { ParentCommentContext } from '../../../../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext'
import useDetectCurrentPage from '../../../../../../hooks/routing/useDetectCurrentPage.ts'

const findCommentContent = (comment, id) => {
  const visited = new Set()
  const q = [comment]
  while (q.length !== 0) {
    const currNode = q.shift()
    visited.add(currNode.data.id)
    if (currNode.data.id === id) return currNode.data.editorState
    currNode.children.forEach((child) => {
      if (!visited.has(child.data.id)) q.push(child)
    })
  }
  return ''
}

export default (commentData, contentId, spaceId, commentId) => {
  const { isOnTribunalPage } = useDetectCurrentPage()

  const { currentUser } = useGetCurrentUser()
  const {
    currentPage,
    rootCommentId,
    commentId: rootId,
    isFocusedComment,
    rootOfCommentReplyThreadId,
    isReplies,
    commentType,
    focusedCommentId,
  } = useContext(ParentCommentContext) || {}

  const { data: comments } = useGetAllCommentsQuery({ discussionId: commentData.discussionId, currentPage }, {
    skip: !commentData || !currentUser || commentId || isOnTribunalPage,
  })

  const { data: commentWithReplies } = useGetAllCommentRepliesQuery(commentId, {
    skip: !commentData || !currentUser || !commentId || isOnTribunalPage,
  })

  const { data: tribunalComments } = useGetAllTribunalCommentsQuery({contentId, commentType}, {
    skip: !contentId || !currentUser || !isOnTribunalPage || !commentType,
  })

  const { createdByUsername, createdByIconSrc, createdAt } = commentData || {}
  return useMemo(() => {
    const rootComment = comments?.find((c) => c.data.id === rootId)

    const tribunalRootComment = tribunalComments?.find(
      (c) => c.data?.id === rootCommentId,
    )

    const commentReplyRootComment = commentWithReplies?.replies.find(
      (c) => c.data?.id === rootCommentId,
    )

    const focusedComment = commentWithReplies?.comment

    if (
      !rootComment
      && !tribunalRootComment
      && !commentReplyRootComment
      && !focusedComment
    ) { return null }
    const commentContent = findCommentContent(
      rootComment
        || tribunalRootComment
        || commentReplyRootComment || { data: focusedComment },
      commentData.id,
    )
    return {
      ...commentData,
      contentId: commentData.discussionId || contentId,
      discussionId: commentData.discussionId,
      spaceId: spaceId || contentId,
      createdByIconSrc,
      username: currentUser?.username,
      createdByUsername,
      time: createdAt,
      lexicalRawContent: commentContent,
      parentId: commentData.id || null,
      rootId: rootOfCommentReplyThreadId,
      currentPage,
      isFocusedComment,
      id: commentData.id,
      rootOfCommentReplyThreadId,
      isReplies,
      commentType,
      focusedCommentId,
    }
  }, [currentUser, commentData, contentId, commentId, commentType])
}
