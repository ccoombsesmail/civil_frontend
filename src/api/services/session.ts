import { toast } from 'react-toastify'
import { emptySplitApi } from './base'
import { showLoadingSpinner, hideLoadingSpinner } from '../../redux/actions/ui'

interface UserData {
  userId: string 
  username: string,
  iconSrc: string


}

export const sessionApi = emptySplitApi.injectEndpoints({
 
  endpoints: (builder) => ({
    getCurrentUser: builder.query<UserData, string>({
      query: (userId) => ({ url: `/users?userId=${userId}`, method: 'GET' }),
      providesTags: ['Session'],
      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        dispatch(showLoadingSpinner())
        queryFulfilled.finally(() => dispatch(hideLoadingSpinner()))
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