export function truncateAtIndex(str, index) {
  if (str.length > index) {
    return `${str.slice(0, index)}`
  }
  return str
}
