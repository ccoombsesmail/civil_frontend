export const longUsernameDisplay = (username) => {
  const usernameLength = username?.length
  if (usernameLength > 15) {
    return `${username.substring(0, 6)}...${username.substring(usernameLength - 5)}`
  }
  return username
}
