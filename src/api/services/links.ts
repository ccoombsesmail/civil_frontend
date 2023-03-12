import { emptyWebScraperServiceSplitApi } from './emptyLinkMetaDataBaseApi'


interface Id {
  id: string
}

export const linksApi = emptyWebScraperServiceSplitApi.injectEndpoints({
  endpoints: (builder) => ({
  getLinkMetaData: builder.mutation<any, any>({
    query: (url) => {
      return ({ 
      url: `/og/`, 
      method: 'POST',
      data: {
        url
      }
    }
    )},
  }),
})

})

export const { useGetLinkMetaDataMutation } = linksApi

// export const useGetAllNotificationsQueryState = linksApi.endpoints.getAllNotifications.useQueryState