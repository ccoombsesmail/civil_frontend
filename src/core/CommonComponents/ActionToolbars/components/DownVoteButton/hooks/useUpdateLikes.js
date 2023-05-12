import { useCallback, useContext } from "react";
import { useUpdateSpaceLikesMutation } from "../../../../../../api/services/spaces.ts";

import {
  SPACE,
  COMMENT,
  TRIBUNAL_COMMENT,
} from "../../../../../../enums/content_type";
import useDetectCurrentPage from "../../../../../hooks/routing/useDetectCurrentPage";
import { calculateLikeValueToAdd } from "../../../utils/calculateLikeValueToAdd";
import { useUpdateCommentLikesMutation } from "../../../../../../api/services/comments.ts";
import { useUpdateTribunalCommentLikesMutation } from "../../../../../../api/services/tribunal_comments.ts";
import { ParentCommentContext } from "../../../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext";
import {
  DislikedState,
  NeutralState,
} from "../../../../../../enums/like_state.js";
import { SpaceItemContext } from "../../../../../pages/HomePage/components/Spaces/components/SpaceItem/SpaceItemContex.jsx";

export default (content, user, contentType, currentPageSpace) => {
  const {
    isReplies,
    isFocusedComment,
    commentId,
    currentPage,
    rootOfCommentReplyThreadId,
    reportedContentId,
    commentType,
  } = useContext(ParentCommentContext) || {};

  const { updateFollowedSpacesQuery } = useContext(SpaceItemContext) || {};

  const [updateTribunalCommentLikes] = useUpdateTribunalCommentLikesMutation();
  const [updateSpaceLikes] = useUpdateSpaceLikesMutation();
  const [updateCommentLikes] = useUpdateCommentLikesMutation();
  const { isOnDiscussionsPage, isOnTribunalPage } = useDetectCurrentPage();

  return useCallback(() => {
    const likeData = {
      id: content?.id,
      commentId,
      updateLikeValue: calculateLikeValueToAdd(
        content.likeState,
        content.likeState === DislikedState ? NeutralState : DislikedState
      ),
      updateGetSpaceQuery: isOnDiscussionsPage || isOnTribunalPage,
      createdByUserId: content.createdByUserId,
      isReplies,
      isFocusedComment,
      ...content,
      currentPage: currentPageSpace ?? currentPage,
      rootOfCommentReplyThreadId,
      rootId: content?.rootId,
      newLikeState:
        content.likeState === DislikedState ? NeutralState : DislikedState,
      likeAction:
        content.likeState === DislikedState ? NeutralState : DislikedState,
      reportedContentId,
      commentType,
      updateFollowedSpacesQuery
    };
    switch (contentType) {
      case SPACE:
        updateSpaceLikes(likeData);
        break;
      case COMMENT:
        updateCommentLikes(likeData);
        break;
      case TRIBUNAL_COMMENT:
        updateTribunalCommentLikes(likeData);
        break;
      default:
        break;
    }
  }, [content]);
};
