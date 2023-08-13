import axios from 'axios'
import { toast } from 'react-toastify'
import { UPLOAD_SERVICE } from '../../endpoints/endpoints'

const uploadFile = (data, fileType, fileFormat, contentType) => axios
  .post(`${UPLOAD_SERVICE}/content/${contentType}/upload-media?fileType=${fileType}&fileFormat=${fileFormat}`, data)

export const uploadFileToAws = (data, fileType, fileFormat, contentType) => toast.promise(
  uploadFile(data, fileType, fileFormat, contentType),
  {
    pending: 'Uploading Media...',
    success: 'Media Successfully Uploaded!',
    error: {
      render({ data: errorData }) {
        const { response } = errorData
        const { data: responseData } = response
        return `${responseData.msg} 🤯 `
      },
    },
  },
)
