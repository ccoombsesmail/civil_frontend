import { useCallback, useContext } from "react";
import { useUpdateSpaceLikesMutation } from "../../../../../api/services/spaces";

import { calculateLikeValueToAdd } from "../../utils/calculateLikeValueToAdd";
import useDetectCurrentPage from "../../../../hooks/routing/useDetectCurrentPage";
import { LikedState, NeutralState, DislikedState } from "../../../../../enums/like_state";
import { SpaceItemContext, SpaceItemContextValue } from "../../../../pages/HomePage/components/Spaces/components/SpaceItem/SpaceItemContex.jsx";
import { Space } from "../../../../../types/spaces/space";

export default (content: Space,  action: 'upvote' | 'downvote') => {
  const { id, createdByUserId, likeState } = content || {};
  const { updateFollowedSpacesQuery, currentPage } = useContext<SpaceItemContextValue>(SpaceItemContext) || {};

  const [updateLikes, { isLoading }] = useUpdateSpaceLikesMutation();
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
    updateGetSpaceQuery: isOnDiscussionsPage,
    currentPage,
    newLikeState,
    likeAction: newLikeState,
    updateFollowedSpacesQuery
  });


  const handleUpdateLikes = useCallback(async () => {
    const likeData = prepareLikeData();

    await updateLikes(likeData);

  }, [prepareLikeData]);

  return { handleUpdateLikes, isLoading};
};