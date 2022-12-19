export const errorFormatter = (error) => `Sorry! An Error Occurred \n
 ${error.response.data.code || error.response.status} ${error.response.statusText}: \n ${error.response.data.userMsg}`
