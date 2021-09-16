
export const getTimeSince = (date) => {
  let res
  let unit = 'm'
  const currDateTime = Date.now()
  const subjectDateTime = new Date(date)
  res = Math.floor((currDateTime - subjectDateTime) / 60000)
  if (res > 60) {
    res = Math.floor(res / 60)
    unit = 'h'
  }
  if (res > 60) {
    res =  Math.floor(res / 24)
    unit = 'd'
  }
  return `${res}${unit}`
}