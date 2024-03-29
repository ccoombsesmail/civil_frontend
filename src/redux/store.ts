import { configureStore, combineReducers } from '@reduxjs/toolkit'


import logger from 'redux-logger'
import uiReducer from './reducers/ui_reducer'
import recsReducer from './reducers/recs/recsReducer.js'

import { enumsApi } from '../api/services/enums';
import { emptySplitApi } from '../api/services/base';
import { emptyNotificationsSplitApi } from '../api/services/notificationsBaseApi';
import { emptyMiscServiceSplitApi } from '../api/services/emptyMiscServiceBaseApi';
import { searchApi } from '../api/services/search';
import { emptyWebScraperServiceSplitApi } from '../api/services/emptyLinkMetaDataBaseApi';

const preloadedState = {
  ui: {
    loadingSpinner: {
      isOpen: false
    },
    showLoadingPage: false
  },
  recommendations: {
    recs: [],
    opposingRecs: []
  }
}

const reducers = {
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  [emptyNotificationsSplitApi.reducerPath]: emptyNotificationsSplitApi.reducer,
  [emptyMiscServiceSplitApi.reducerPath]: emptyMiscServiceSplitApi.reducer,
  [emptyWebScraperServiceSplitApi.reducerPath]: emptyWebScraperServiceSplitApi.reducer,
  [enumsApi.reducerPath]: enumsApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  ui: uiReducer,
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
    emptySplitApi.middleware,
    enumsApi.middleware,
    emptyNotificationsSplitApi.middleware,
    emptyMiscServiceSplitApi.middleware,
    emptyWebScraperServiceSplitApi.middleware,
    searchApi.middleware,
    // logger
  ]),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
