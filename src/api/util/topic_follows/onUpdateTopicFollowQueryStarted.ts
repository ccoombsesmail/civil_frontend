import { topicsApi } from "../../services/topics";


export const onAddTopicFollowQueryStarted = async ( 
  { id, currentPage, updateFollowedTopicsQuery,  ...patch },
  { dispatch, queryFulfilled }) => {
    let patchResult
    if (updateFollowedTopicsQuery) {
      patchResult = dispatch(
        topicsApi.util.updateQueryData("getAllFollowedTopics", undefined, (draft) => {
          const index = draft.findIndex((t) => t.id === id)
          if (index !== -1) {
            draft[index].isFollowing = true;
          }
        })
      )

    } else {
      patchResult = dispatch(
        topicsApi.util.updateQueryData("getAllTopics", currentPage, (draft) => {
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




 export const onRemoveTopicFollowQueryStarted = async ( 
  { followedTopicId, currentPage, updateFollowedTopicsQuery, ...patch },
  { dispatch, queryFulfilled }) => {
    let patchResult
    if (updateFollowedTopicsQuery) {
      patchResult = dispatch(
        topicsApi.util.updateQueryData("getAllFollowedTopics", undefined, (draft) => {
          const index = draft.findIndex((t) => t.id === followedTopicId)
          if (index !== -1) {
            draft[index].isFollowing = false;
          }
        })
      )

    } else {
      patchResult = dispatch(
        topicsApi.util.updateQueryData("getAllTopics", currentPage, (draft) => {
          const index = draft.findIndex((t) => t.id === followedTopicId)
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
  