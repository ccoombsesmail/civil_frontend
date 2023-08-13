import { current } from "@reduxjs/toolkit";
import { discussionsApi } from "../../services/discussions";
import { Method } from "axios";
import { createDraft, finishDraft } from "immer";

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
          const newDraft = createDraft(draft);
          const index = newDraft.findIndex((t) => t.id === id);
          if (index !== -1) {
            newDraft[index].isFollowing = true;
          }
          return finishDraft(newDraft);
        }
      )
    );
  } else if (updateFocusedDiscussionQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData("getDiscussion", id, (draft) => {
        const newDraft = createDraft(draft);
        newDraft.isFollowing = true;
        return finishDraft(newDraft);

      })
    );
  } else {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData("getPopularDiscussions", {currentPage}, (draft) => {
        const newDraft = createDraft(draft);
        const index = newDraft.findIndex((t) => t.id === id);
        if (index !== -1) {
          newDraft[index].isFollowing = true;
        }
        return finishDraft(newDraft);
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
          draft[index].isFollowing = false;
        }
      }
    )
  );
} else if (updateFocusedDiscussionQuery) {
  patchResult = dispatch(
    discussionsApi.util.updateQueryData("getDiscussion", id, (draft) => {
      draft.isFollowing = false;
    })
  );
} else {
  console.log("HEREERERE")
  patchResult = dispatch(
    discussionsApi.util.updateQueryData("getPopularDiscussions", {currentPage}, (draft) => {
      const index = draft.findIndex((t) => t.id === id);
      console.log(current(draft))

      console.log(index)
      if (index !== -1) {
        console.log(current(draft[index]))
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