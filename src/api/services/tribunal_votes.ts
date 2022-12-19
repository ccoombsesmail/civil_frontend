import { closeModal } from '../../redux/actions/ui/index.js'
import { emptySplitApi } from './base'


export interface Vote {
 
}

export const tribunalVotesApi = emptySplitApi.injectEndpoints({
  // reducerPath: 'tribunalVotes',
  // tagTypes: ['TribunalVotes'],
  // baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    createTribunalVote: builder.mutation<Vote, Partial<Vote>>({
      query: (body) => {
        return ({ 
        url: `/tribunal-votes`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: [{ type: 'TribunalVote', id: 'LIST' }],
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