import { createDraft, current, finishDraft } from "immer";
import { spacesApi } from "../../services/spaces";
import { discussionsApi } from "../../services/discussions";

export async function onUpdateDiscussionLikesQueryStarted(
  {
    id,
    spaceId,
    updateLikeValue,
    updateGetDiscussionQuery,
    updateFollowedDiscussionsQuery,
    updatePopularDiscussionsQuery,
    updateUserDiscussionsQuery,
    updateSpaceDiscussionsQuery,
    currentlyViewedProfileUserId,
    currentPage,
    newLikeState,
    isPopularDiscussion,
    ...patch
  },
  { dispatch, queryFulfilled }
): Promise<void> {
  let patchResult;
  if (updateGetDiscussionQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData("getDiscussion", id, (draft) => {
        if (id) {
          draft.likeState = newLikeState;
          draft.likes += updateLikeValue;
        }
      })
    );
  } else if (updatePopularDiscussionsQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData(
        "getPopularDiscussions",
        currentPage,
        (draft) => {
          const index = draft.findIndex((t) => t.id === id);
          if (index !== -1) {
            draft[index].likeState = newLikeState;
            draft[index].likes += updateLikeValue;
          }
        }
      )
    );
  } else if (updateFollowedDiscussionsQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData(
        "getAllFollowedDiscussions",
        currentPage,
        (draft) => {
          const index = draft.findIndex((t) => t.id === id);
          if (index !== -1) {
            draft[index].likeState = newLikeState;
            draft[index].likes += updateLikeValue;
          }
        }
      )
    );
  } else if (updateUserDiscussionsQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData(
        "getUserDiscussions",
        {userId: currentlyViewedProfileUserId, currentPage},
        (draft) => {
          const index = draft.findIndex((t) => t.id === id);
          if (index !== -1) {
            draft[index].likeState = newLikeState;
            draft[index].likes += updateLikeValue;
          }
        }
      )
    );
  } else if (updateSpaceDiscussionsQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData(
        "getAllSpaceDiscussions",
        { spaceId, currentPage },
        (draft) => {
          const index = draft.findIndex((t) => t.id === id);
          if (index !== -1) {
            draft[index].likeState = newLikeState;
            draft[index].likes += updateLikeValue;
          }
        }
      )
    );
  }
  try {
    await queryFulfilled;
  } catch {
    patchResult.undo();
  }
}
