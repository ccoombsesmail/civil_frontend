import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Reducer } from 'redux';


import logger from 'redux-logger'
import { sessionApi } from '../api/services/session';
import { topicsApi } from '../api/services/topics'


const preloadedState = {
  [sessionApi.reducerPath]: {
    currentUser: null,
  },
}

const reducers = {
  [topicsApi.reducerPath]: topicsApi.reducer,
  [sessionApi.reducerPath]: sessionApi.reducer 

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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([topicsApi.middleware, logger]),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
