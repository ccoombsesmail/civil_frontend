
export const getMinutesSince = (date) => {
  const currDateTime = Date.now()
  const subjectDateTime = new Date(date)

  return new Date(currDateTime - subjectDateTime).getMinutes()
}