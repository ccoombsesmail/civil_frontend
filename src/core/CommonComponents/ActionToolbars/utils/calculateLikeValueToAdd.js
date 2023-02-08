export const calculateLikeValueToAdd = (prevState, nextState) => {
  switch (prevState.toString() + nextState.toString()) {
    case "10": return -1
    case "01":  return 1
    case "-10":  return 1
    case "0-1": return -1
    case "1-1": return -2
    case "-11": return 2
    default: return 0
  }
}