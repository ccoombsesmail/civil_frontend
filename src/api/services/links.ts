import { emptyMiscServiceSplitApi } from './emptyMiscServiceBaseApi'


interface Id {
  id: string
}

export const linksApi = emptyMiscServiceSplitApi.injectEndpoints({
  // reducerPath: 'notifications',
  // baseQuery: notificationsBaseQuery,
  endpoints: (builder) => ({
    getLinkMetaData: builder.query<Id, any>({
      query: (url) => {
        return ({ 
        url: `/topics/link-meta-data?url=${url}`, 
        method: 'GET',
      }
      )},
    }),
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

export const { useGetLinkMetaDataQuery, useUploadTopicMediaMutation } = linksApi

// export const useGetAllNotificationsQueryState = linksApi.endpoints.getAllNotifications.useQueryState