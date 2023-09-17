import { emptySplitApi } from './base'

export const tribunalJuryApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserJuryDuties: builder.query<any, any>({
      query: () => ({ url: `/jury/user-duties`, method: 'GET' }),   
    }),
  })
})

export const { 
  useGetUserJuryDutiesQuery
} = tribunalJuryApi