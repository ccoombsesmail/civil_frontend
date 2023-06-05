import { createDraft, current, finishDraft } from "immer";
import { tribunalCommentsApi } from "../../services/tribunal_comments";
import { findComment } from '../comments/findComment'

export default async function onUpdateLikesQueryStartedTribunal({
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
  commentType,
  contentId,
  reportedContentId,
  ...patch
},
{ dispatch, queryFulfilled }) {
  let patchResult;
  patchResult = dispatch(
    tribunalCommentsApi.util.updateQueryData(
      "getAllTribunalComments",
      {contentId: reportedContentId, commentType},
      (draft) => {
        let comment;
        const newDraft = createDraft(draft);
        const rootComment = newDraft.find((c) => c.data.id === rootId);
        if (!parentId) {
          comment = newDraft.find((c) => c.data.id === id);
          comment.data.likeState = newLikeState;
          comment.data.likes += updateLikeValue;
          return finishDraft(newDraft);
        }
        comment = findComment(id, rootComment);
        comment.data.likeState = newLikeState;
        comment.data.likes += updateLikeValue;
        return finishDraft(newDraft);
      }
    )
  );
  

  try {
    await queryFulfilled;
  } catch {
    patchResult.undo();
  }
}