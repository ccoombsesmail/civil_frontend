import { toast } from 'react-toastify'
import { emptySplitApi } from './base'


interface UserData {
  userId: string 
  username: string,


}

export const sessionApi = emptySplitApi.injectEndpoints({
 
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
    })
  }),
})

export const { useGetCurrentUserQuery, useUpsertDidUserMutation, useLazyGetCurrentUserQuery } = sessionApi

export const useGetCurrentUserQueryState = sessionApi.endpoints.getCurrentUser.useQueryState