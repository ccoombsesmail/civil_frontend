import { DislikedState, LikedState, NeutralState } from "../../../../enums/like_state"

export const calculateLikeValueToAdd = (prevState, nextState) => {
  switch (prevState.toString() + nextState.toString()) {
    case LikedState + NeutralState: return -1
    case NeutralState + LikedState:  return 1
    case DislikedState + NeutralState:  return 1
    case NeutralState + DislikedState: return -1
    case LikedState + DislikedState: return -2
    case DislikedState + LikedState: return 2
    default: return 0
  }
}