import { useCallback, useContext } from "react";
import { useUpdateTopicLikesMutation } from "../../../../../../api/services/topics.ts";

import {
  TOPIC,
  COMMENT,
  TRIBUNAL_COMMENT,
} from "../../../../../../enums/content_type";
import { calculateLikeValueToAdd } from "../../../utils/calculateLikeValueToAdd";
import { useUpdateCommentLikesMutation } from "../../../../../../api/services/comments.ts";
import { useUpdateTribunalCommentLikesMutation } from "../../../../../../api/services/tribunal_comments.ts";
import useDetectCurrentPage from "../../../../../hooks/routing/useDetectCurrentPage";
import { ParentCommentContext } from "../../../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext";
import {
  LikedState,
  NeutralState,
} from "../../../../../../enums/like_state.js";
import { TopicItemContext } from "../../../../../pages/HomePage/components/Topics/components/TopicItem/TopicItemContex.jsx";

export default (content, user, contentType, currentPageTopic) => {
  const {
    isReplies,
    isFocusedComment,
    commentId,
    currentPage,
    rootOfCommentReplyThreadId,
    commentType,
    reportedContentId,
  } = useContext(ParentCommentContext) || {};

  const { updateFollowedTopicsQuery } = useContext(TopicItemContext) || {};

  const [updateTribunalCommentLikes] = useUpdateTribunalCommentLikesMutation();
  const [updateLikes] = useUpdateTopicLikesMutation();
  const [updateCommentLikes] = useUpdateCommentLikesMutation();
  const { isOnDiscussionsPage, isOnTribunalPage } = useDetectCurrentPage();
  return useCallback(async () => {
    const likeData = {
      id: content?.id,
      commentId,
      createdByUserId: content.createdByUserId,
      updateLikeValue: calculateLikeValueToAdd(
        content.likeState,
        content.likeState === LikedState ? NeutralState : LikedState
      ),
      updateGetTopicQuery: isOnDiscussionsPage || isOnTribunalPage,
      isReplies,
      isFocusedComment,
      ...content,
      currentPage: currentPageTopic ?? currentPage,
      rootOfCommentReplyThreadId,
      rootId: content?.rootId,
      newLikeState:
        content.likeState === LikedState ? NeutralState : LikedState,
      likeAction: content.likeState === LikedState ? NeutralState : LikedState,
      commentType,
      reportedContentId,
      updateFollowedTopicsQuery
    };
    switch (contentType) {
      case TOPIC:
        await updateLikes(likeData);
        break;
      case COMMENT:
        await updateCommentLikes(likeData);
        break;
      case TRIBUNAL_COMMENT:
        await updateTribunalCommentLikes(likeData);
        break;
      default:
        break;
    }
  }, [content, contentType]);
};
