import React from 'react'

import { Switch, Route } from 'react-router'
import SubTopicThread from '../../../SubTopicThread/Index'
import SubTopicsTable from '../SubTopicsTable/Index'
import WavyBackground from '../../../CommonComponents/WavyBackground/Index'

export default () => (
  <Switch>
    <Route path="/topics/:topicId/subtopics/:subTopicId">
      <WavyBackground color="green" top="115%" />
      <SubTopicThread />
    </Route>
    <Route path="/topics/:topicId/subtopics/">
      <SubTopicsTable />
    </Route>
  </Switch>
)
