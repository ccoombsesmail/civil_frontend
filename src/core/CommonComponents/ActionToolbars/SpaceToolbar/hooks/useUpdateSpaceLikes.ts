import { useCallback, useContext } from "react";
import { useUpdateSpaceLikesMutation } from "../../../../../api/services/spaces";

import { calculateLikeValueToAdd } from "../../utils/calculateLikeValueToAdd";
import useDetectCurrentPage from "../../../../hooks/routing/useDetectCurrentPage";
import { LikedState, NeutralState } from "../../../../../enums/like_state";
import { SpaceItemContext, SpaceItemContextValue } from "../../../../pages/HomePage/components/Spaces/components/SpaceItem/SpaceItemContex.jsx";
import { Space } from "../../../../../types/spaces/space";

export default (content: Space) => {
  const { id, createdByUserId, likeState } = content || {};
  const { updateFollowedSpacesQuery, currentPage } = useContext<SpaceItemContextValue>(SpaceItemContext) || {};
  console.log(content, currentPage)

  const [updateLikes] = useUpdateSpaceLikesMutation();
  const { isOnDiscussionsPage } = useDetectCurrentPage();
  
  const newLikeState = likeState === LikedState ? NeutralState : LikedState;

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
    console.log(likeData)

    await updateLikes(likeData);

  }, [prepareLikeData]);

  return handleUpdateLikes;
};