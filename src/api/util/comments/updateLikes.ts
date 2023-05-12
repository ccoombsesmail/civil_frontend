import { createDraft, current, finishDraft } from "immer";
import { commentsApi } from "../../services/comments";
import { findComment } from './findComment'

export default async function onUpdateLikesQueryStarted({
  id,
  rootId,
  currentPage,
  commentId,
  parentId,
  discussionId,
  isFocusedComment,
  updateLikeValue,
  updateGetSpaceQuery,
  isReplies,
  rootOfCommentReplyThreadId,
  newLikeState,
  ...patch
},
{ dispatch, queryFulfilled }) {
  let patchResult;
  if (isFocusedComment) {
    patchResult = dispatch(
      commentsApi.util.updateQueryData(
        "getAllCommentReplies",
        id,
        (draft) => {
          if (id) {
            const newDraft = createDraft(draft);
            newDraft.comment.likeState = newLikeState;
            newDraft.comment.likes += updateLikeValue;
            return finishDraft(newDraft);
          }
        }
      )
    );
  } else if (isReplies) {
    patchResult = dispatch(
      commentsApi.util.updateQueryData(
        "getAllCommentReplies",
        rootId,
        (draft) => {
          const newDraft = createDraft(draft);
          const rootComment = newDraft.replies.find(
            (c) => c.data.id === commentId
          );
          if (parentId === rootId) {
            rootComment.data.likeState = newLikeState;
            rootComment.data.likes += updateLikeValue;
            return finishDraft(newDraft);
          }
          const comment = findComment(id, rootComment);
          comment.data.likeState = newLikeState;
          comment.data.likes += updateLikeValue;
          return finishDraft(newDraft);
        }
      )
    );
  } else {
    patchResult = dispatch(
      commentsApi.util.updateQueryData(
        "getAllComments",
        { discussionId, currentPage },
        (draft) => {
          let comment;
          const newDraft = createDraft(draft);
          const rootComment = newDraft.find((c) => c.data.id === rootOfCommentReplyThreadId);
          if (!parentId) {
            rootComment.data.likeState = newLikeState;
            rootComment.data.likes += updateLikeValue;
            return finishDraft(newDraft);
          }
          comment = findComment(id, rootComment);
          comment.data.likeState = newLikeState;
          comment.data.likes += updateLikeValue;
          return finishDraft(newDraft);
        }
      )
    );
  }

  try {
    await queryFulfilled;
  } catch {
    patchResult.undo();
  }
}