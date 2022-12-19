import { emptyNotificationsSplitApi } from './notificationsBaseApi'


interface Id {
  id: string
}

export const notificationsApi = emptyNotificationsSplitApi.injectEndpoints({
  // reducerPath: 'notifications',
  // baseQuery: notificationsBaseQuery,
  endpoints: (builder) => ({
    getAllNotifications: builder.query<any, any>({
      query: (userId) => ({ url: `/notifications?userId=${userId}`, method: 'GET' })
    }),
    updateNotificationToRead: builder.mutation<Id, any>({
      query: ({notificationType, id}) => {
        return ({ 
        url: `/notifications?notificationType=${notificationType}`, 
        method: 'PUT',
        data: { id }
      }
      )},
    })
  }),
})

export const { useGetAllNotificationsQuery, useUpdateNotificationToReadMutation } = notificationsApi

export const useGetAllNotificationsQueryState = notificationsApi.endpoints.getAllNotifications.useQueryState