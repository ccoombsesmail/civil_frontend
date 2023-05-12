import { createDraft, current, finishDraft } from "immer";
import { tribunalCommentsApi } from "../../services/tribunal_comments";
import { findComment } from '../comments/findComment'

export default async function onUpdateCivilityQueryStartedTribunal(
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
    reportedContentId,
    commentType,
    ...patch
  },
  { dispatch, queryFulfilled }
) {
  let patchResult;
  patchResult = dispatch(
    tribunalCommentsApi.util.updateQueryData(
      "getAllTribunalComments",
      {contentId: reportedContentId, commentType},
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
  
  try {
    await queryFulfilled;
  } catch ({ error }) {
    patchResult.undo();
  }
}