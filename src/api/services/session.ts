import { toast } from 'react-toastify'
import { emptySplitApi } from './base'
import { showLoadingSpinner, hideLoadingSpinner } from '../../redux/actions/ui'

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
        dispatch(showLoadingSpinner())
        queryFulfilled.finally(() => dispatch(hideLoadingSpinner()))
        // toast.promise(
        //   queryFulfilled,
        //   {
        //     pending: 'Fetching Session Data...',
        //     success: 'Session Successfully Loaded',
        //     error: {
        //       render({ data: errorData }) {
        //         console.log(errorData)
        //         const { error } = errorData
        //         const { data: responseData } = error
        //         return `${responseData.userMsg} 🤯 `
        //       },
        //     },
        //   },
        // )
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