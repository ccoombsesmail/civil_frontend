import { useCallback, useContext } from "react";
import { toast } from "react-toastify";

import { checkToxicity } from "../../../../api/v1/comments/comments_api_util";
import delay from "../../../../generic/delay";
import useDetectCurrentPage from "../../../hooks/routing/useDetectCurrentPage";
import { useCreateCommentMutation } from "../../../../api/services/comments.ts";
import { useCreateTribunalCommentMutation } from "../../../../api/services/tribunal_comments.ts";
import useGetCurrentUser from "../../../App/hooks/useGetCurrentUser";
import { ParentCommentContext } from "../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext";
import { filterObject } from "../../../../generic/object/filterObjectKeys";

import { TribunalCommentKeys } from "../../../../types/tribunal/tribunal_comments_reply";

export default (commentFormState, richTextEditorData, closeModal) => {
  const { isOnTribunalPage: isTribunalComment } = useDetectCurrentPage();
  const [createComment] = useCreateCommentMutation();
  const [createTribunalComment] = useCreateTribunalCommentMutation();
  const { currentUser } = useGetCurrentUser();
  const {
    parentId,
    rootId,
    currentPage,
    discussionId,
    contentId,
    spaceId,
    isFocusedComment,
    id,
    rootOfCommentReplyThreadId,
    isReplies,
    isReportedComment,
  } = commentFormState;

  return useCallback(
    (values, { setSubmitting, resetForm }) => {
      toast
        .promise(
          Promise.all([
            delay(1500),
            checkToxicity({ content: richTextEditorData.lexicalContent }),
          ]),
          {
            pending: "Analyzing Comment...",
            success: {
              render({ data }) {
                const toxicityScore = data[1].data.SEVERE_TOXICITY;
                if (toxicityScore < 0.6) return "Thanks For Being Civil!";
                if (toxicityScore >= 0.6 && toxicityScore <= 0.9)
                  return "Thanks for being semi-civil. Maybe say things a bit nicer";
                return "You are being toxic :( \n Your comment will be flagged";
              },
              icon: "🟢",
            },
            error: "Promise rejected 🤯",
          }
        )
        .then((data) => {
          const toxicityScore = data[1].data.TOXICITY;
          let toxicityStatus;
          if (toxicityScore < 0.6) toxicityStatus = "NOT_TOXIC";
          if (toxicityScore > 0.9) toxicityStatus = "TOXIC";
          const comment = {
            ...values,
            editorState: richTextEditorData.lexicalContent,
            memeFlag: false,
            parentId: isReportedComment ? null : parentId || id,
            contentId,
            discussionId,
            spaceId,
            createdByUsername: currentUser.username,
            rootId: isReportedComment ? null : rootId || id,
            editorTextContent: richTextEditorData.editorTextContent,
            toxicityStatus,
            currentPage,
            isFocusedComment,
            id: null,
            rootOfCommentReplyThreadId,
            isReplies,
          };
          return isTribunalComment
            ? createTribunalComment(filterObject(comment, TribunalCommentKeys))
            : createComment(comment);
        });

      setSubmitting(false);
      resetForm({});
      closeModal();
    },
    [commentFormState, richTextEditorData, contentId]
  );
};
