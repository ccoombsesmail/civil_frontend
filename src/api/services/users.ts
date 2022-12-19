import { toast } from 'react-toastify'
import { closeModal } from '../../redux/actions/ui/index.js'
import { addSessionDataDID } from '../../redux/actions/session/index.js'
import { emptySplitApi } from './base'
interface UserData {
  userId: string
}

export const usersApi = emptySplitApi.injectEndpoints({
  // reducerPath: 'users',
  // baseQuery: backendBaseQuery,
  // tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<UserData, UserData>({
      query: (userId) => ({ url: `/users?userId=${userId}`, method: 'GET' }),
      providesTags: ['User'],
      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        
        toast.promise(
          queryFulfilled,
          {
            pending: 'Fetching User Profile Data...',
            success: 'User Profile Successfully Loaded!',
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
    updateUserBioInformation: builder.mutation<any, any>({
      query: (body) => {
        return ({ 
        url: `/users/bio-experience`, 
        method: 'PATCH',
        data: body
      }
      )},
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
  }),
})

export const { useGetUserQuery, useUpdateUserBioInformationMutation } = usersApi

