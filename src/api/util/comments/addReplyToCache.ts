import { createDraft, finishDraft, current } from "immer";
import { commentsApi } from "../../services/comments";
import { findComment } from './findComment'



const addToGetAllCommentsCache = async (arg, dispatch, addedComment) => {
  return dispatch(
    commentsApi.util.updateQueryData(
      "getAllComments",
      {
        discussionId: addedComment.data.discussionId,
        currentPage: arg.currentPage,
      },
      (draft) => {
        if (draft) {
          const newDraft = createDraft(draft);
          const rootComment = newDraft.find(
            (c) => c.data.id === addedComment.data.rootId
          );

          if (addedComment.data.parentId === null) {
            rootComment.children.push({
              data: addedComment.data,
              children: [],
            });
            return
          }
          const comment = findComment(
            addedComment.data.parentId,
            rootComment
          );
          comment.children.push({
            data: addedComment.data,
            children: [],
          });
          return finishDraft(newDraft);
        }
      }
    )
  );

}

const addDirectReplyToGetAllCommentRepliesCache = async (commentId, dispatch, addedComment) => {
  return dispatch(
    commentsApi.util.updateQueryData(
      "getAllCommentReplies", commentId,
      (draft) => {
        if (draft) {
          const newDraft = createDraft(draft);
          newDraft.replies.unshift({
            data: addedComment.data,
            children: [],
          });
          return finishDraft(newDraft);
        }
      }
    )
  );
}


const addReplyToGetAllCommentRepliesCache = async ({ id, rootId, parentId, rootOfCommentReplyThreadId, focusedCommentId}, dispatch, addedComment) => {
  return dispatch(
    commentsApi.util.updateQueryData(
      "getAllCommentReplies", focusedCommentId,
      (draft) => {
        if (draft) {
          const newDraft = createDraft(draft);
          const rootComment = newDraft.replies.find(
            (c) => c.data.id === rootOfCommentReplyThreadId
          );
          if (parentId === focusedCommentId) {
            rootComment.children.push({
                data: addedComment.data,
                children: [],
            })
            return finishDraft(newDraft);
          }
          const comment = findComment(id, rootComment);
          comment.children.push({
            data: addedComment.data,
            children: [],
            })
          return finishDraft(newDraft);
        }
      }
    )
  );

}



export default async function addReplyToCache(
  arg,
  {
    dispatch,
    getState,
    extra,
    requestId,
    cacheEntryRemoved,
    cacheDataLoaded,
    getCacheEntry,
  }
) {

  const { id, isFocusedComment, isReplies, rootId } = arg
  const addedComment = await cacheDataLoaded;
  if (isFocusedComment) {
    await addDirectReplyToGetAllCommentRepliesCache(id, dispatch, addedComment)
  } else if (isReplies) {
    await addReplyToGetAllCommentRepliesCache(arg, dispatch, addedComment)
  } else {
    await addToGetAllCommentsCache(arg, dispatch, addedComment)
  }

}