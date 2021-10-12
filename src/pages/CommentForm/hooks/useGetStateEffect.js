import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { uuidRegEx } from "../../../generic/regex/uuid";

export default (topicId, subtopicId, locationState) => {
 
  const user = useSelector((s) => s.session.currentUser)
  const topic = useSelector((s) => s.topics.list)?.find((topic) => topic.id === topicId)
  const comment = useSelector((s) => s.comments.list)?.find((comment) => comment.id === locationState.commentId)

  return useMemo(() => {
      return {
        subtopicId: subtopicId,
        createdByIconSrc: comment?.iconSrc || topic?.createdByIconSrc,
        username: user?.username,
        createdBy: comment?.createdBy || topic?.createdBy,
        time: comment?.createdAt || topic?.createdAt ,
        htmlContent: comment?.content || topic?.description,
        rootParentCommentId: locationState?.rootParentCommentId || null,
      }
  }, [topic, user, comment, subtopicId ])

}