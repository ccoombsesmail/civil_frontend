export const errorFormatter = (error) => {
  console.log(error.response)
  return `Sorry! An Error Occurred \n ${error.response.data.code || error.response.status} ${error.response.statusText}: \n ${error.response.data.userMsg}`
}
