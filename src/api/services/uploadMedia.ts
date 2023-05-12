import { emptyMiscServiceSplitApi } from './emptyMiscServiceBaseApi'


export const uploadMediaApi = emptyMiscServiceSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadSpaceMedia: builder.mutation<any, any>({
      query: (data) => {
        console.log(data)
        return ({ 
        url: `/spaces/upload-media`, 
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

export const { useUploadSpaceMediaMutation } = uploadMediaApi

