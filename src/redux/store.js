import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import RootReducer from './reducers/root_reducer'

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
)

export default configureStore

// hook this store to the react application
// provider will provide everything in store to the app
// wrap <App /> with a provider that contains the store we just created
