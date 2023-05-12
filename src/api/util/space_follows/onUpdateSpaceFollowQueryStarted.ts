import { spacesApi } from "../../services/spaces";


export const onAddSpaceFollowQueryStarted = async ( 
  { id, currentPage, updateFollowedSpacesQuery,  ...patch },
  { dispatch, queryFulfilled }) => {
    let patchResult
    if (updateFollowedSpacesQuery) {
      patchResult = dispatch(
        spacesApi.util.updateQueryData("getAllFollowedSpaces", undefined, (draft) => {
          const index = draft.findIndex((t) => t.id === id)
          if (index !== -1) {
            draft[index].isFollowing = true;
          }
        })
      )

    } else {
      patchResult = dispatch(
        spacesApi.util.updateQueryData("getAllSpaces", currentPage, (draft) => {
          const index = draft.findIndex((t) => t.id === id)
          if (index !== -1) {
            draft[index].isFollowing = true;
          }
        })
      )
    }
    try {
      await queryFulfilled;
    } catch {
      patchResult.undo();
    }


  }




 export const onRemoveSpaceFollowQueryStarted = async ( 
  { followedSpaceId, currentPage, updateFollowedSpacesQuery, ...patch },
  { dispatch, queryFulfilled }) => {
    let patchResult
    if (updateFollowedSpacesQuery) {
      patchResult = dispatch(
        spacesApi.util.updateQueryData("getAllFollowedSpaces", undefined, (draft) => {
          const index = draft.findIndex((t) => t.id === followedSpaceId)
          if (index !== -1) {
            draft[index].isFollowing = false;
          }
        })
      )

    } else {
      patchResult = dispatch(
        spacesApi.util.updateQueryData("getAllSpaces", currentPage, (draft) => {
          const index = draft.findIndex((t) => t.id === followedSpaceId)
          if (index !== -1) {
            draft[index].isFollowing = false;
          }
        })
      )
    }
    try {
      await queryFulfilled;
    } catch {
      patchResult.undo();
    }
  
    }
  