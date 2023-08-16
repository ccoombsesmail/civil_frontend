import { useCallback, useContext } from "react";
import { useUpdateDiscussionLikesMutation } from "../../../../../api/services/discussions";

import { calculateLikeValueToAdd } from "../../utils/calculateLikeValueToAdd";
import useDetectCurrentPage from "../../../../hooks/routing/useDetectCurrentPage";
import {
  LikedState,
  NeutralState,
  DislikedState,
} from "../../../../../enums/like_state.js";
import { Discussion } from "../../../../../types/discussions/discussion";
import {
  DiscussionItemContext,
  DiscussionItemContextValue,
} from "../../../InfiniteLoaders/ContentItems/DiscussionItem/DiscussionItemContext";

export default (
  content: Discussion,
  action: "upvote" | "downvote",
  updateGetDiscussionQuery: boolean
) => {
  const { id, createdByUserId, likeState, spaceId } = content;
  const {
    currentPage,
    isPopularDiscussion,
    updateUserDiscussionsQuery,
    updateFollowedDiscussionsQuery,
    updatePopularDiscussionsQuery,
    updateSpaceDiscussionsQuery,
    currentlyViewedProfileUserId,
  } = useContext<DiscussionItemContextValue>(DiscussionItemContext) || {};

  const [updateLikes, { isLoading }] = useUpdateDiscussionLikesMutation();
  const { isOnDiscussionsPage } = useDetectCurrentPage();

  let newLikeState;
  if (action === "upvote") {
    newLikeState = likeState === LikedState ? NeutralState : LikedState;
  } else if (action === "downvote") {
    newLikeState = likeState === DislikedState ? NeutralState : DislikedState;
  }

  const prepareLikeData = () => ({
    id: id,
    createdByUserId: createdByUserId,
    updateLikeValue: calculateLikeValueToAdd(likeState, newLikeState),
    updateGetDiscussionQuery,
    updateFollowedDiscussionsQuery,
    updatePopularDiscussionsQuery,
    updateUserDiscussionsQuery,
    updateSpaceDiscussionsQuery,
    currentlyViewedProfileUserId,
    currentPage,
    newLikeState,
    likeAction: newLikeState,
    spaceId,
    isPopularDiscussion,
  });

  const handleUpdateLikes = useCallback(async () => {
    const likeData = prepareLikeData();
    await updateLikes(likeData);
  }, [prepareLikeData]);

  return { handleUpdateLikes, isLoading };
};
