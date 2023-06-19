import { emptyMiscServiceSplitApi } from './emptyMiscServiceBaseApi'


export const uploadMediaApi = emptyMiscServiceSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadSpaceMedia: builder.mutation<any, any>({
      query: (data) => {
        return ({ 
        url: `/spaces/upload-media`, 
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      )},
    }),
    uploadUserIcon: builder.mutation<any, any>({
      query: ({ fileData, userId}) => {
        return ({
        url: `/users/uploadIcon`, 
        method: 'POST',
        body: fileData,
        headers: {
          post: {
            'Content-Type': 'multipart/form-data'
          },
          common: {
            'Content-Type': 'multipart/form-data'
          }
        }
      }
      )},
    })
  }),
})

export const { useUploadSpaceMediaMutation, useUploadUserIconMutation } = uploadMediaApi

