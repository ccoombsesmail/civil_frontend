import React from 'react'

import { Route, Routes } from 'react-router-dom'

import DiscussionThread from '../DiscussionThread/Index'
import DiscussionsList from '../DiscussionsList/Index'
import CommentThread from '../CommentThread/Index'

export default () => (
  <Routes>
    <Route
      path=":discussionId/comments/:commentId"
      element={(
        <>
          <CommentThread />
        </>
      )}
    />
    <Route
      path=":discussionId"
      element={(
        <>
          <DiscussionThread />
        </>
      )}
    />
    <Route path="/" element={<DiscussionsList />} />
  </Routes>
)
