import { emptyMiscServiceSplitApi } from './emptyMiscServiceBaseApi'


export const uploadMediaApi = emptyMiscServiceSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadTopicMedia: builder.mutation<any, any>({
      query: (data) => {
        console.log(data)
        return ({ 
        url: `/topics/upload-media`, 
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      )},
    })
  }),
})

export const { useUploadTopicMediaMutation } = uploadMediaApi

