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
    })
  }),
})

export const { useGetLinkMetaDataQuery } = linksApi

// export const useGetAllNotificationsQueryState = linksApi.endpoints.getAllNotifications.useQueryState