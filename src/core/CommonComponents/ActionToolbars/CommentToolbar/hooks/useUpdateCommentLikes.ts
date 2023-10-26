import { useCallback, useContext } from "react";

import { calculateLikeValueToAdd } from "../../utils/calculateLikeValueToAdd";
import { LikedState, NeutralState, DislikedState } from "../../../../../enums/like_state";
import { Comment } from "../../../../../types/comments/comment";
import { useUpdateCommentLikesMutation } from "../../../../../api/services/comments";
import { useUpdateTribunalCommentLikesMutation } from "../../../../../api/services/tribunal_comments";
import { ParentCommentContext, ParentCommentContextValue } from "../../../InfiniteLoaders/ContentItems/CommentItem/ParentCommentContext";



export default (content: Comment,  action: 'upvote' | 'downvote', isTribunalComment: boolean) => {
  const { id, createdByUserData, likeState, rootId, parentId, discussionId, reportedContentId } = content || {};
  const { currentPage, rootOfCommentReplyThreadId, isReplies, isFocusedComment, focusedCommentId, commentType } = useContext<ParentCommentContextValue>(ParentCommentContext) || {};
  
  const [updateLikes, { isLoading }] = useUpdateCommentLikesMutation();
  const [updateTribunalLikes, { isLoading: isTribunalLoading }] = useUpdateTribunalCommentLikesMutation();




  const handleUpdateLikes = useCallback(async () => {
    let newLikeState;
    if (action === 'upvote') {
      newLikeState = likeState === LikedState ? NeutralState : LikedState;
    } else if (action === 'downvote') {
      newLikeState = likeState === DislikedState ? NeutralState : DislikedState;
    }
    const prepareLikeData = () => ({
      id: id,
      discussionId,
      parentId,
      rootId,
      createdByUserId: createdByUserData.createdByUserId,
      updateLikeValue: calculateLikeValueToAdd(likeState, newLikeState),
      newLikeState,
      currentPage,
      rootOfCommentReplyThreadId,
      isReplies,
      isFocusedComment,
      likeAction: newLikeState,
      focusedCommentId,
      reportedContentId, 
      commentType
    });
    const likeData = prepareLikeData();
    console.log(likeData)

    if (isTribunalComment) {
      await updateTribunalLikes(likeData)
    } else {
      await updateLikes(likeData);
    }

  }, [isTribunalComment, content, action]);

  return { handleUpdateLikes, isLoading: isLoading || isTribunalLoading};
};