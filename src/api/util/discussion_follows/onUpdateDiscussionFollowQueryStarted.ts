import { current } from "@reduxjs/toolkit";
import { discussionsApi } from "../../services/discussions";
import { Method } from "axios";
import { createDraft, finishDraft } from "immer";

export interface AddRemoveDiscussionQueryParams {
  id: string;
  currentPage?: number;
  updateFollowedDiscussionsQuery?: boolean;
  updateFocusedDiscussionQuery?: boolean;
  updatePopularDiscussionsQuery?: boolean,
  updateSpaceDiscussionsQuery?: boolean,
  updateUserDiscussionsQuery?: boolean,
  isPopularDiscussion?: boolean,
  currentlyViewedProfileUserId?: string,
  patch?: object;
  spaceId?: string
}



export const onAddDiscussionFollowQueryStarted = async (
  {
    id,
    currentPage,
    updateFollowedDiscussionsQuery,
    updateFocusedDiscussionQuery,
    updatePopularDiscussionsQuery,
    updateSpaceDiscussionsQuery,
    updateUserDiscussionsQuery,
    currentlyViewedProfileUserId,
    isPopularDiscussion,
    spaceId,
    ...patch
  }: AddRemoveDiscussionQueryParams,
  { dispatch, queryFulfilled }: any
): Promise<void> => {

  let patchResult;
  if (updateFollowedDiscussionsQuery) {
    console.log(updateFollowedDiscussionsQuery)
    console.log(currentPage)
    patchResult = dispatch(
      discussionsApi.util.updateQueryData(
        "getAllFollowedDiscussions",
        currentPage,
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
  } else if (updatePopularDiscussionsQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData("getPopularDiscussions", currentPage, (draft) => {
        const newDraft = createDraft(draft);
        const index = newDraft.findIndex((t) => t.id === id);
        if (index !== -1) {
          newDraft[index].isFollowing = true;
        }
        return finishDraft(newDraft);

      })
    );
  } else if (updateSpaceDiscussionsQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData("getAllSpaceDiscussions", { spaceId, currentPage}, (draft) => {
        const newDraft = createDraft(draft);
        const index = newDraft.findIndex((t) => t.id === id);
        if (index !== -1) {
          newDraft[index].isFollowing = true;
        }
        return finishDraft(newDraft);
      })
    );
  } else if (updateUserDiscussionsQuery) {
    patchResult = dispatch(
      discussionsApi.util.updateQueryData("getUserDiscussions", { userId: currentlyViewedProfileUserId, currentPage}, (draft) => {
        const newDraft = createDraft(draft);
        const index = newDraft.findIndex((t) => t.id === id);
        if (index !== -1) {
          newDraft[index].isFollowing = true;
        }
        return finishDraft(newDraft);
      })
    );
  }
   else {
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
    updatePopularDiscussionsQuery,
    updateSpaceDiscussionsQuery,
    updateUserDiscussionsQuery,
    currentlyViewedProfileUserId,
    isPopularDiscussion,
    spaceId,
    ...patch
  }: AddRemoveDiscussionQueryParams,
  { dispatch, queryFulfilled }: any
): Promise<void> => {
let patchResult;
if (updateFollowedDiscussionsQuery) {
  console.log(updateFollowedDiscussionsQuery)
  console.log(currentPage)
  patchResult = dispatch(
    discussionsApi.util.updateQueryData(
      "getAllFollowedDiscussions",
      currentPage,
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
} else if (updatePopularDiscussionsQuery) {
  patchResult = dispatch(
    discussionsApi.util.updateQueryData("getPopularDiscussions", currentPage, (draft) => {
      const newDraft = createDraft(draft);
      const index = newDraft.findIndex((t) => t.id === id);
      if (index !== -1) {
        newDraft[index].isFollowing = false;
      }
      return finishDraft(newDraft);
    })
  );
} else if (updateSpaceDiscussionsQuery) {
  patchResult = dispatch(
    discussionsApi.util.updateQueryData("getAllSpaceDiscussions", { spaceId, currentPage}, (draft) => {
      const newDraft = createDraft(draft);
      const index = newDraft.findIndex((t) => t.id === id);
      if (index !== -1) {
        newDraft[index].isFollowing = false;
      }
      return finishDraft(newDraft);
    })
  );
} else if (updateUserDiscussionsQuery) {
  patchResult = dispatch(
    discussionsApi.util.updateQueryData("getUserDiscussions", { userId: currentlyViewedProfileUserId, currentPage}, (draft) => {
      const newDraft = createDraft(draft);
      const index = newDraft.findIndex((t) => t.id === id);
      if (index !== -1) {
        newDraft[index].isFollowing = false;
      }
      return finishDraft(newDraft);
    })
  );
} else {
  patchResult = dispatch(
    discussionsApi.util.updateQueryData("getPopularDiscussions", {currentPage}, (draft) => {
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