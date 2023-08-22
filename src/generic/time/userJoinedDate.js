export function userJoinedDate(createdAt, withPrefix = true) {
  // Parse the input date string into a Date object
  const date = new Date(createdAt)

  // Array of month names for formatting
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // Get the day of the month
  const day = date.getDate()

  // Get the month name from the array using the month index
  const month = monthNames[date.getMonth()]

  // Get the full year
  const year = date.getFullYear()

  // Function to get the ordinal suffix for a given day of the month
  function getOrdinalSuffix(d) {
    if (d > 3 && d < 21) return 'th'
    switch (d % 10) {
      case 1: return 'st'
      case 2: return 'nd'
      case 3: return 'rd'
      default: return 'th'
    }
  }

  // Combine the formatted parts into the final string
  return `${withPrefix ? 'Joined ' : ''}${month}, ${day}${getOrdinalSuffix(day)} ${year}`
}
