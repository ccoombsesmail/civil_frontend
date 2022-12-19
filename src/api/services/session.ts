import { toast } from 'react-toastify'
import { emptySplitApi } from './base'
interface UserData {

}

export const sessionApi = emptySplitApi.injectEndpoints({
  // reducerPath: 'session',
  // baseQuery: backendBaseQuery,
  // tagTypes: ['User'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query<UserData, string>({
      query: (userId) => ({ url: `/users?userId=${userId}`, method: 'GET' }),
      providesTags: ['Session'],
      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        toast.promise(
          queryFulfilled,
          {
            pending: 'Fetching Session Data...',
            success: 'Session Successfully Loaded',
            error: {
              render({ data: errorData }) {
                const { response } = errorData
                const { data: responseData } = response
                return `${responseData.msg} 🤯 `
              },
            },
          },
        )
      }
    
    }),
    upsertDidUser: builder.mutation<UserData, Partial<UserData>>({
      query: (body: any) => {
        return ({ 
        url: `/users/did-user`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: ['User'],
    })
  }),
})

export const { useGetCurrentUserQuery, useUpsertDidUserMutation } = sessionApi

export const useGetCurrentUserQueryState = sessionApi.endpoints.getCurrentUser.useQueryState