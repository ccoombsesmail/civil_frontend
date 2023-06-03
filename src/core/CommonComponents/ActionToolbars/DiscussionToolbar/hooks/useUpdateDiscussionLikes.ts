import { useCallback, useContext } from "react";
import { useUpdateDiscussionLikesMutation } from "../../../../../api/services/discussions";

import { calculateLikeValueToAdd } from "../../utils/calculateLikeValueToAdd";
import useDetectCurrentPage from "../../../../hooks/routing/useDetectCurrentPage";
import { LikedState, NeutralState } from "../../../../../enums/like_state.js";
import { Space } from "../../../../../types/spaces/space";
import { Discussion } from "../../../../../types/discussions/discussion";
import { DiscussionItemContex, DiscussionItemContextValue } from "../../../../pages/DiscussionsPage/components/DiscussionsFeed/components/CardFeedItem/DiscussionItemContext";

export default (content: Discussion) => {
  const { id, createdByUserId, likeState } = content;
  const { currentPage, spaceId } = useContext<DiscussionItemContextValue>(DiscussionItemContex);

  const [updateLikes] = useUpdateDiscussionLikesMutation();
  const { isOnDiscussionsPage } = useDetectCurrentPage();
  
  const newLikeState = likeState === LikedState ? NeutralState : LikedState;

  const prepareLikeData = () => ({
    id: id,
    createdByUserId: createdByUserId,
    updateLikeValue: calculateLikeValueToAdd(likeState, newLikeState),
    updateGetDiscussionQuery: isOnDiscussionsPage,
    currentPage,
    newLikeState,
    likeAction: newLikeState,
    spaceId
  });

  const handleUpdateLikes = useCallback(async () => {
    const likeData = prepareLikeData();
    await updateLikes(likeData);

  }, [prepareLikeData]);

  return handleUpdateLikes;
};