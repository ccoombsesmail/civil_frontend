export const errorFormatter = (error) => `Sorry! An Error Occurred \n ${error.response.data.code}: ${error.response.data.msg}`
