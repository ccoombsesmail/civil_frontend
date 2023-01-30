import { closeModal } from '../../redux/actions/ui/index.js'
import { emptySplitApi } from './base'


export interface Vote {
  totalVotes: number,
  voteCast: boolean,
  pollOptionId: string
 
}

export const pollVotesApi = emptySplitApi.injectEndpoints({
  // reducerPath: 'tribunalVotes',
  // tagTypes: ['TribunalVotes'],
  // baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    createPollVote: builder.mutation<Vote, Partial<Vote>>({
      query: (body) => {
        return ({ 
        url: `/poll-votes`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: [{ type: 'PollVote', id: 'LIST' }],
    }),
    deletePollVote: builder.mutation<string, Partial<string>>({
      query: (pollOptionId: string) => {
        return ({ 
        url: `/poll-votes/${pollOptionId}`, 
        method: 'DELETE',
      }
      )},
      invalidatesTags: [{ type: 'PollVote', id: 'LIST' }],
      
    }),
    getPollVoteData: builder.query<any, any>({
      query: (ids) => ({ url: `/poll-votes?ids=${ids.join(',')}`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ userId }) => ({ type: 'PollVote', id: 'LIST' } as const)),
          ]
        : 
          [{ type: 'Follow', id: 'LIST' }],
    }),
  }),
})

export const { useCreatePollVoteMutation, useDeletePollVoteMutation, useGetPollVoteDataQuery } = pollVotesApi