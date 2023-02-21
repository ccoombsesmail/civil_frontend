import { emptyNotificationsSplitApi } from "./notificationsBaseApi";

interface Id {
  id: string;
}

export const notificationsApi = emptyNotificationsSplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query<any, any>({
      query: (userId) => ({
        url: `/notifications?userId=${userId}`,
        method: "GET",
      }),
    }),
    updateNotificationToRead: builder.mutation<Id, any>({
      query: ({ notificationType, id }) => {
        return {
          url: `/notifications?notificationType=${notificationType}`,
          method: "PUT",
          data: { id },
        }
      },
      async onQueryStarted({ id, userId, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          notificationsApi.util.updateQueryData(
            "getAllNotifications",
            userId,
            (draft) => {
              let index
              index = draft.tribunalNotifications.findIndex(n => n.id === id)
              if (index !== -1) draft.tribunalNotifications[index].isRead = true
              index = draft.userNotifications.findIndex(n => n.id === id)
              if (index !== -1) draft.userNotifications[index].isRead = true
            }
          )
        )
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteNotification: builder.mutation<Id, any>({
      query: ({ notificationType, id }) => {
        return {
          url: `/notifications?notificationType=${notificationType}&id=${id}`,
          method: "DELETE",
        };
      },
      async onQueryStarted({ id, userId, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          notificationsApi.util.updateQueryData(
            "getAllNotifications",
            userId,
            (draft) => {
              let index
              index = draft.tribunalNotifications.findIndex(n => n.id === id)
              if (index !== -1) draft.tribunalNotifications.splice(index, 1)
              index = draft.userNotifications.findIndex(n => n.id === id)
              if (index !== -1) draft.userNotifications.splice(index, 1)
            }
          )
        )
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useUpdateNotificationToReadMutation,
  useDeleteNotificationMutation,
} = notificationsApi;

export const useGetAllNotificationsQueryState =
  notificationsApi.endpoints.getAllNotifications.useQueryState;
