/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

import { Container } from './Style'

import UserSpacesFeed from './UserPostFeeds/UserSpacesFeed'
import UserDiscussionsFeed from './UserPostFeeds/UserDiscussionsFeed'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'
import UserCommentsFeed from './UserPostFeeds/UserCommentsFeed'

function UserPosts({ profileUserId, usernameDisplay, isCurrentUser }) {
  const headerText = isCurrentUser ? 'Your Activity' : `${longUsernameDisplay(usernameDisplay)}'s Activity`
  return (
    <Container>
      <h1>{headerText}</h1>
      <div className="line" />
      <TabView
        className="w-full"
      >
        <TabPanel
          header="Spaces"
          pt={{
            content: {
              className: 'w-full',
            },
          }}
        >
          <UserSpacesFeed profileUserId={profileUserId} />
        </TabPanel>
        <TabPanel
          header="Discussions"
          pt={{
            content: {
              className: 'w-full',
            },
          }}
        >
          <UserDiscussionsFeed profileUserId={profileUserId} />
        </TabPanel>
        <TabPanel
          header="Comments"
          pt={{
            content: {
              className: 'w-full',
            },
          }}
        >
          <UserCommentsFeed profileUserId={profileUserId} />
        </TabPanel>
      </TabView>
    </Container>

  )
}
export default UserPosts
