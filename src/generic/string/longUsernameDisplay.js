export const longUsernameDisplay = (username) => {
  const usernameLength = username?.length
  if (usernameLength > 15) {
    return `${username.slice(0, 4)}..${username.slice(-4)}`
  }
  return username
}
