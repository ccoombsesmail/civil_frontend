import { createDraft, current, finishDraft } from "immer";
import { spacesApi } from "../../services/spaces";

export async function onUpdateSpacesLikesQueryStarted(
  {
    id,
    updateLikeValue,
    updateGetSpaceQuery,
    updateFollowedSpacesQuery,
    updateUserSpacesQuery,
    currentPage,
    newLikeState,
    currentlyViewedProfileUserId,
    ...patch
  },
  { dispatch, queryFulfilled }
): Promise<void> {
  let patchResult;
  if (updateGetSpaceQuery) {
    patchResult = dispatch(
      spacesApi.util.updateQueryData("getSpace", id, (draft) => {
        const newDraft = createDraft(draft);

        if (id) {
          newDraft.likeState = newLikeState;
          newDraft.likes += updateLikeValue;
        }
        return finishDraft(newDraft);

      })
    );
  } else if (updateFollowedSpacesQuery) {
    patchResult = dispatch(
      spacesApi.util.updateQueryData(
        "getAllFollowedSpaces",
        currentPage,
        (draft) => {
          const newDraft = createDraft(draft);
          const index = newDraft.findIndex((t) => t.id === id);
          if (index !== -1) {
            newDraft[index].likeState = newLikeState;
            newDraft[index].likes += updateLikeValue;
          }
          return finishDraft(newDraft);

        }
      )
    );
  } else if (updateUserSpacesQuery) {
    patchResult = dispatch(
      spacesApi.util.updateQueryData(
        "getUserSpaces",
        { userId: currentlyViewedProfileUserId, currentPage },
        (draft) => {
          console.log({ userId: currentlyViewedProfileUserId, currentPage })
          const newDraft = createDraft(draft);
          const index = newDraft.findIndex((t) => t.id === id);
          if (index !== -1) {
            newDraft[index].likeState = newLikeState;
            newDraft[index].likes += updateLikeValue;
          }
          return finishDraft(newDraft);
        }
      )
    );
  } else {
    patchResult = dispatch(
      spacesApi.util.updateQueryData("getAllSpaces", currentPage, (draft) => {
        const newDraft = createDraft(draft);
        const index = newDraft.findIndex((t) => t.id === id);
        if (index !== -1) {
          newDraft[index].likeState = newLikeState;
          newDraft[index].likes += updateLikeValue;
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
}
