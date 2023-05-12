// combine all the reducers in the index.jsx file

import { combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import uiReducer from './ui_reducer'
import spacesReducer from './spacesReducer'
import discussionsReducer from './discussions/subSpacesReducer'
import commentsReducer from './comments/commentsReducer'
import usersReducer from './users/usersReducer'
import followsReducer from './follows/followsReducer'
import enumsReducer from './enumsReducer'
import recsReducer from './recs/recsReducer'
import reportsReducer from './reports/reportsReducer'
import notificationsReducer from './notifications/notificationsReducer'
import tribunalCommentsReducer from './tribunal_comments/tribunalCommentsReducer'

const reducers = combineReducers({
  session: sessionReducer,
  ui: uiReducer,
  spaces: spacesReducer,
  discussions: discussionsReducer,
  comments: commentsReducer,
  enums: enumsReducer,
  users: usersReducer,
  follows: followsReducer,
  recommendations: recsReducer,
  reports: reportsReducer,
  notifications: notificationsReducer,
  tribunalComments: tribunalCommentsReducer,
})
export default reducers
