// combine all the reducers in the index.jsx file

import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import uiReducer from './ui_reducer'
import topicsReducer from './topicsReducer'
import subtopicsReducer from './subTopicsReducer'
import commentsReducer from './comments/commentsReducer'
import usersReducer from './users/usersReducer'
import followsReducer from './follows/followsReducer'
import enumsReducer from './enumsReducer'

const reducers = combineReducers({
  session: sessionReducer,
  ui: uiReducer,
  topics: topicsReducer,
  subtopics: subtopicsReducer,
  comments: commentsReducer,
  enums: enumsReducer,
  users: usersReducer,
  follows: followsReducer,
})
export default reducers
