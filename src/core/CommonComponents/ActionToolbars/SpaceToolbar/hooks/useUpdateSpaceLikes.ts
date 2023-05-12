import { useCallback, useContext } from "react";
import { useUpdateSpaceLikesMutation } from "../../../../../api/services/spaces";

import { SPACE } from "../../../../../enums/content_type";
import { calculateLikeValueToAdd } from "../../utils/calculateLikeValueToAdd";
import useDetectCurrentPage from "../../../../hooks/routing/useDetectCurrentPage";
import { LikedState, NeutralState } from "../../../../../enums/like_state.js";
import { SpaceItemContext, SpaceItemContextValue } from "../../../../pages/HomePage/components/Spaces/components/SpaceItem/SpaceItemContex.jsx";
import { Space } from "../../../../../types/spaces/space";

export default (content: Space, contentType: string) => {
  const { id, createdByUserId, likeState } = content;
  const { updateFollowedSpacesQuery, currentPage } = useContext<SpaceItemContextValue>(SpaceItemContext);

  const [updateLikes] = useUpdateSpaceLikesMutation();
  const { isOnDiscussionsPage } = useDetectCurrentPage();
  
  const newLikeState = likeState === LikedState ? NeutralState : LikedState;

  const prepareLikeData = () => ({
    id: id,
    createdByUserId: createdByUserId,
    updateLikeValue: calculateLikeValueToAdd(likeState, newLikeState),
    updateGetSpaceQuery: isOnDiscussionsPage,
    ...content,
    currentPage,
    newLikeState,
    likeAction: newLikeState,
    updateFollowedSpacesQuery
  });

  const handleUpdateLikes = useCallback(async () => {
    const likeData = prepareLikeData();
    switch (contentType) {
      case SPACE:
        await updateLikes(likeData);
        break;
      default:
        break;
    }
  }, [contentType, prepareLikeData]);

  return handleUpdateLikes;
};