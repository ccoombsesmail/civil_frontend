import { useCallback, useContext } from "react";
import { useUpdateDiscussionLikesMutation } from "../../../../../api/services/discussions";

import { calculateLikeValueToAdd } from "../../utils/calculateLikeValueToAdd";
import useDetectCurrentPage from "../../../../hooks/routing/useDetectCurrentPage";
import { LikedState, NeutralState, DislikedState } from "../../../../../enums/like_state.js";
import { Discussion } from "../../../../../types/discussions/discussion";
import { DiscussionItemContex, DiscussionItemContextValue } from "../../../../pages/DiscussionsPage/components/DiscussionsFeed/components/CardFeedItem/DiscussionItemContext";

export default (content: Discussion, action: 'upvote' | 'downvote', updateGetDiscussionQuery: boolean) => {
  const { id, createdByUserId, likeState } = content;
  const { currentPage, spaceId } = useContext<DiscussionItemContextValue>(DiscussionItemContex) || {};

  const [updateLikes, { isLoading }] = useUpdateDiscussionLikesMutation();
  const { isOnDiscussionsPage } = useDetectCurrentPage();
  
  let newLikeState;
  if (action === 'upvote') {
    newLikeState = likeState === LikedState ? NeutralState : LikedState;
  } else if (action === 'downvote') {
    newLikeState = likeState === DislikedState ? NeutralState : DislikedState;
  }

  const prepareLikeData = () => ({
    id: id,
    createdByUserId: createdByUserId,
    updateLikeValue: calculateLikeValueToAdd(likeState, newLikeState),
    updateGetDiscussionQuery: updateGetDiscussionQuery,
    currentPage,
    newLikeState,
    likeAction: newLikeState,
    spaceId
  });

  const handleUpdateLikes = useCallback(async () => {
    const likeData = prepareLikeData();
    await updateLikes(likeData);

  }, [prepareLikeData]);

  return { handleUpdateLikes, isLoading};
};