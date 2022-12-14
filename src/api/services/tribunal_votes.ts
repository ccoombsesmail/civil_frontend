import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { closeModal } from '../../redux/actions/ui/index.js'


export interface Vote {
 
}

export const tribunalVotesApi = createApi({
  reducerPath: 'tribunalVotes',
  tagTypes: ['TribunalVotes'],
  baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    createTribunalVote: builder.mutation<Vote, Partial<Vote>>({
      query: (body) => {
        return ({ 
        url: `/tribunal-votes`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: [{ type: 'TribunalVotes', id: 'LIST' }],
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
        }
      ) {
        dispatch(closeModal())
      },
    })
  }),
})

export const { useCreateTribunalVoteMutation } = tribunalVotesApi