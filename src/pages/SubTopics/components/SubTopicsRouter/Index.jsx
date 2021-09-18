import React from 'react'

import { Switch, Route } from 'react-router'
import SubTopicThread from '../../../SubTopicThread/Index'
import SubTopicsTable from '../SubTopicsTable/Index'

export default () => {
  return (
    <Switch>
      <Route path="/topics/:topicId/subtopics/:subTopicId">
        <SubTopicThread />
      </Route>
      <Route path="/topics/:topicId/subtopics/">
        <SubTopicsTable />
      </Route>
    </Switch>
  )
}