import { current } from "@reduxjs/toolkit";
import { discussionsApi } from "../../services/discussions";
import { Method } from "axios";

export interface AddRemoveDiscussionQueryParams {
  id: string;
  currentPage?: number;
  updateFollowedDiscussionsQuery?: boolean;
  updateFocusedDiscussionQuery?: boolean;
  isPopularDiscussion?: boolean,
  patch?: object;
}



export const onAddDiscussionFollowQueryStarted = async (
  {
    id,
    currentPage,
    updateFollowedDiscussionsQuery,
    updateFocusedDiscussionQuery,
    isPopularDiscussion,
    ...patch
  }: AddRemoveDiscussionQueryParams,
  { dispatch, queryFulfilled }: any
): Promise<void> => {
  let patchResult;
  if (updateFollowedDiscussionsQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData(
        "getAllFollowedDiscussions",
        undefined,
        (draft) => {
          const index = draft.findIndex((t) => t.id === id);
          if (index !== -1) {
            draft[index].isFollowing = true;
          }
        }
      )
    );
  } else if (updateFocusedDiscussionQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData("getDiscussion", id, (draft) => {
        draft.isFollowing = true;
      })
    );
  } else {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData("getPopularDiscussions", currentPage, (draft) => {
        const index = draft.findIndex((t) => t.id === id);
        if (index !== -1) {
          draft[index].isFollowing = true;
        }
      })
    );
  }
  try {
    await queryFulfilled;
  } catch {
    patchResult.undo();
  }
};

export const onRemoveDiscussionFollowQueryStarted = async (
  {
    id,
    currentPage,
    updateFollowedDiscussionsQuery,
    updateFocusedDiscussionQuery,
    ...patch
  }: AddRemoveDiscussionQueryParams,
  { dispatch, queryFulfilled }: any
): Promise<void> => {
  let patchResult;
  if (updateFollowedDiscussionsQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData(
        "getAllFollowedDiscussions",
        undefined,
        (draft) => {
          const index = draft.findIndex((t) => t.id === id);
          if (index !== -1) {
            draft[index].isFollowing = false;
          }
        }
      )
    );
  } else if (updateFocusedDiscussionQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData("getDiscussion", id, (draft) => {
        console.log(current(draft));
        draft.isFollowing = false;
      })
    );
  } else {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData("getAllDiscussions", currentPage, (draft) => {
        const index = draft.findIndex((t) => t.id === id);
        if (index !== -1) {
          draft[index].isFollowing = false;
        }
      })
    );
  }
  try {
    await queryFulfilled;
  } catch {
    patchResult.undo();
  }
};
