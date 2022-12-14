import { createApi } from '@reduxjs/toolkit/query/react'
import { backendBaseQuery } from '../util/axiosInstance'
import { closeModal } from '../../redux/actions/ui/index.js'
import { Console } from 'console';
import { Recipe } from '@reduxjs/toolkit/dist/query/core/buildThunks';
import { enumsApi } from './enums';

export enum TopicCategories {
  Technology,
  Medicine,
  Politics,
  General,
}

export interface SubTopic {
  id: string,
  title: string;
  summary: string;
  description: string;
  tweetUrl?: string;
  ytUrl?: string;
  externalContentUrl?: string;
  evidenceLinks?: ReadonlyArray<string>;
  category: TopicCategories;
  imageUrl?: string;
  vodUrl?: string;
  thumbImgUrl?: string;
}

export const subtopicsApi = createApi({
  reducerPath: 'subtopics',
  tagTypes: ['SubTopics'],
  baseQuery: backendBaseQuery,
  endpoints: (builder) => ({
    getAllSubTopics: builder.query<any, any>({
      query: (topicId) => ({ url: `/subtopics?topicId=${topicId}`, method: 'GET' }),
      providesTags: (result) =>
      result ? 
          [
            ...result.map(({ id }) => ({ type: 'SubTopics', id } as const)),
            { type: 'SubTopics', id: 'LIST' },
          ]
        : 
          [{ type: 'SubTopics', id: 'LIST' }],
    }),
    getSubTopic: builder.query<any, any>({
      query: (subtopicId) => ({ url: `/subtopics/${subtopicId}`, method: 'GET' }),
      // providesTags: (result) => [{ type: 'Topics', id: 'LIST' }],
    }),
    createSubTopic: builder.mutation<SubTopic, Partial<SubTopic>>({
      query: (body) => {
        return ({ 
        url: `/subtopics`, 
        method: 'POST',
        data: body
      }
      )},
      invalidatesTags: [{ type: 'SubTopics', id: 'LIST' }],
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
    }),
  })
})

export const { useGetAllSubTopicsQuery, useGetSubTopicQuery, useCreateSubTopicMutation } = subtopicsApi