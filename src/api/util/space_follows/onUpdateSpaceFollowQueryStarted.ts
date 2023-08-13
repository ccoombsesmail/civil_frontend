import { current } from "@reduxjs/toolkit";
import { spacesApi } from "../../services/spaces";
import { Method } from "axios";
import { createDraft, finishDraft } from "immer";

export interface AddRemoveSpaceQueryParams {
  id: string;
  currentPage?: number;
  updateFollowedSpacesQuery?: boolean;
  updateFocusedSpaceQuery?: boolean;
  patch?: object;
}



export const onAddSpaceFollowQueryStarted = async (
  {
    id,
    currentPage,
    updateFollowedSpacesQuery,
    updateFocusedSpaceQuery,
    ...patch
  }: AddRemoveSpaceQueryParams,
  { dispatch, queryFulfilled }: any
): Promise<void> => {
  let patchResult;
  if (updateFollowedSpacesQuery) {
    patchResult = dispatch(
      spacesApi.util.updateQueryData(
        "getAllFollowedSpaces",
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
  } else if (updateFocusedSpaceQuery) {
    patchResult = dispatch(
      spacesApi.util.updateQueryData("getSpace", id, (draft) => {
        const newDraft = createDraft(draft);
        newDraft.isFollowing = true;
        return finishDraft(newDraft);
      })
    );
  } else {
    patchResult = dispatch(
      spacesApi.util.updateQueryData("getAllSpaces", currentPage, (draft) => {
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

export const onRemoveSpaceFollowQueryStarted = async (
  {
    id,
    currentPage,
    updateFollowedSpacesQuery,
    updateFocusedSpaceQuery,
    ...patch
  }: AddRemoveSpaceQueryParams,
  { dispatch, queryFulfilled }: any
): Promise<void> => {
  let patchResult;
  if (updateFollowedSpacesQuery) {
    patchResult = dispatch(
      spacesApi.util.updateQueryData(
        "getAllFollowedSpaces",
        undefined,
        (draft) => {
          const index = draft.findIndex((t) => t.id === id);
          if (index !== -1) {
            draft[index].isFollowing = false;
          }
        }
      )
    );
  } else if (updateFocusedSpaceQuery) {
    patchResult = dispatch(
      spacesApi.util.updateQueryData("getSpace", id, (draft) => {
        console.log(current(draft));
        draft.isFollowing = false;
      })
    );
  } else {
    patchResult = dispatch(
      spacesApi.util.updateQueryData("getAllSpaces", currentPage, (draft) => {
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
