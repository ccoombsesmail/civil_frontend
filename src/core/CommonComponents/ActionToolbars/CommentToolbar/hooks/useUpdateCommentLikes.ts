import { useCallback, useContext } from "react";

import { calculateLikeValueToAdd } from "../../utils/calculateLikeValueToAdd";
import { LikedState, NeutralState, DislikedState } from "../../../../../enums/like_state";
import { Comment } from "../../../../../types/comments/comment";
import { useUpdateCommentLikesMutation } from "../../../../../api/services/comments";

import { ParentCommentContext, ParentCommentContextValue } from '../../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext'

export default (content: Comment,  action: 'upvote' | 'downvote') => {
  const { id, createdByUserId, likeState, rootId, parentId, discussionId } = content || {};
  const { currentPage, rootOfCommentReplyThreadId, isReplies, isFocusedComment, focusedCommentId } = useContext<ParentCommentContextValue>(ParentCommentContext) || {};
  
  const [updateLikes, { isLoading }] = useUpdateCommentLikesMutation();
  
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
    createdByUserId: createdByUserId,
    updateLikeValue: calculateLikeValueToAdd(likeState, newLikeState),
    newLikeState,
    currentPage,
    rootOfCommentReplyThreadId,
    isReplies,
    isFocusedComment,
    likeAction: newLikeState,
    focusedCommentId
  });


  const handleUpdateLikes = useCallback(async () => {
    const likeData = prepareLikeData();

    await updateLikes(likeData);

  }, [prepareLikeData]);

  return { handleUpdateLikes, isLoading};
};