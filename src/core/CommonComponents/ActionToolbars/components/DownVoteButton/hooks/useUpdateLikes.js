import { useCallback, useContext } from "react";
import { useUpdateTopicLikesMutation } from "../../../../../../api/services/topics.ts";

import {
  TOPIC,
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
import { TopicItemContext } from "../../../../../pages/HomePage/components/Topics/components/TopicItem/TopicItemContex.jsx";

export default (content, user, contentType, currentPageTopic) => {
  const {
    isReplies,
    isFocusedComment,
    commentId,
    currentPage,
    rootOfCommentReplyThreadId,
    reportedContentId,
    commentType,
  } = useContext(ParentCommentContext) || {};

  const { updateFollowedTopicsQuery } = useContext(TopicItemContext) || {};

  const [updateTribunalCommentLikes] = useUpdateTribunalCommentLikesMutation();
  const [updateTopicLikes] = useUpdateTopicLikesMutation();
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
      updateGetTopicQuery: isOnDiscussionsPage || isOnTribunalPage,
      createdByUserId: content.createdByUserId,
      isReplies,
      isFocusedComment,
      ...content,
      currentPage: currentPageTopic ?? currentPage,
      rootOfCommentReplyThreadId,
      rootId: content?.rootId,
      newLikeState:
        content.likeState === DislikedState ? NeutralState : DislikedState,
      likeAction:
        content.likeState === DislikedState ? NeutralState : DislikedState,
      reportedContentId,
      commentType,
      updateFollowedTopicsQuery
    };
    switch (contentType) {
      case TOPIC:
        updateTopicLikes(likeData);
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
