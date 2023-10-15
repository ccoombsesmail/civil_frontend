import { createDraft, current, finishDraft } from "immer";
import { commentsApi } from "../../services/comments";
import { findComment } from './findComment'

export default async function onUpdateCivilityQueryStarted(
  {
    id,
    rootId,
    parentId,
    commentId,
    currentPage,
    civility,
    discussionId,
    updateLikeValue,
    updateGetSpaceQuery,
    isReplies,
    isFocusedComment,
    rootOfCommentReplyThreadId,
    focusedCommentId,
    ...patch
  },
  { dispatch, queryFulfilled }
) {
  let patchResult;
  if (isFocusedComment) {
    patchResult = dispatch(
      commentsApi.util.updateQueryData(
        "getAllCommentReplies",
        id,
        (draft) => {
          if (id) {
            const newDraft = createDraft(draft);
            newDraft.comment.civility = patch.value;
            return finishDraft(newDraft);
          }
        }
      )
    );
  } else if (isReplies) {
    patchResult = dispatch(
      commentsApi.util.updateQueryData(
        "getAllCommentReplies",
        focusedCommentId,
        (draft) => {
          const newDraft = createDraft(draft);
          const rootComment = newDraft.replies.find(
            (c) => c.data.id === rootOfCommentReplyThreadId
          );
          let comment;
          if (parentId === focusedCommentId) {
            rootComment.data.civility = patch.value;
            return finishDraft(newDraft);
          }
          comment = findComment(id, rootComment);
          comment.data.civility = patch.value;
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
            rootComment.data.civility = patch.value;
            return finishDraft(newDraft);
          }
          comment = findComment(id, rootComment);
          comment.data.civility = patch.value;
          return finishDraft(newDraft);
        }
      )
    );
  }

  try {
    await queryFulfilled;
  } catch ({ error }) {
    patchResult.undo();
  }
}