import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Reducer } from 'redux';


import logger from 'redux-logger'
import { sessionApi } from '../api/services/session';
import { topicsApi } from '../api/services/topics'
import uiReducer from './reducers/ui_reducer'
import recsReducer from './reducers/recs/recsReducer.js'
import usersReducer from './reducers/users/usersReducer'

import followsReducer from './reducers/follows/followsReducer'
import { enumsApi } from '../api/services/enums';
import { notificationsApi } from '../api/services/notifications';
import { tribunalVotesApi } from '../api/services/tribunal_votes';
import { reportsApi } from '../api/services/reports';
import { subtopicsApi } from '../api/services/subtopics';
import { commentsApi } from '../api/services/comments';

const preloadedState = {
  ui: {
    loadingSpinner: {
      isOpen: false
    }
  },
  users: {},
  follows: {
    followed: [],
    followers: []
  },
  recommendations: {
    recs: [],
    opposingRecs: []
  }
}

const reducers = {
  [topicsApi.reducerPath]: topicsApi.reducer,
  [sessionApi.reducerPath]: sessionApi.reducer,
  [enumsApi.reducerPath]: enumsApi.reducer,
  [notificationsApi.reducerPath]: notificationsApi.reducer,
  [tribunalVotesApi.reducerPath]: tribunalVotesApi.reducer,
  [reportsApi.reducerPath]: reportsApi.reducer,
  [subtopicsApi.reducerPath]: subtopicsApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  ui: uiReducer,
  users: usersReducer,
  follows: followsReducer,
  recommendations: recsReducer
 };
const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer = (
  state,
  action
 ) => {
 
  return combinedReducer(state, action);
 };


const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    topicsApi.middleware, 
    sessionApi.middleware,
    enumsApi.middleware,
    notificationsApi.middleware,
    tribunalVotesApi.middleware,
    reportsApi.middleware,
    subtopicsApi.middleware,
    commentsApi.middleware,
    logger
  ]),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
