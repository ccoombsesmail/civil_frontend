// combine all the reducers in the index.jsx file

import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import uiReducer from './ui_reducer'
import topicsReducer from './topicsReducer'
import subtopicsReducer from './subTopicsReducer'

const reducers = combineReducers({
  session: sessionReducer,
  ui: uiReducer,
  topics: topicsReducer,
  subtopics: subtopicsReducer,
})
export default reducers
