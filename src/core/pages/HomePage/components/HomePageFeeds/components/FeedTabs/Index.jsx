import React, { memo } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

import FollowedSpacesFeed from './components/FollowedSpacesFeed/Index'
import PopularDiscussionsFeed from './components/PopularDiscussionsFeed/PopularDiscussionsFeed'
import FollowedDiscussionsFeed from './components/FollowedDiscussionsFeed/Index'
import TrendingSpaces from './components/TrendingSpaces/TrendingSpaces'

function FeedTabs() {
  return (
    <TabView
      className="w-full"
      pt={{
        panelContainer: {
          className: 'p-0',
        },
        navContainer: {
          className: 'mb-4',
        },
      }}
    >
      <TabPanel
        header="Popular Discussions"
        pt={{
          content: {
            className: 'w-full',
          },
        }}
      >
        <PopularDiscussionsFeed />
      </TabPanel>
      <TabPanel
        header="Trending Spaces"
        pt={{
          content: {
            className: 'w-full',
          },
        }}
      >
        <TrendingSpaces />
      </TabPanel>
      <TabPanel
        header="Followed Spaces"
        pt={{
          content: {
            className: 'w-full',
          },
        }}
      >
        <FollowedSpacesFeed />
      </TabPanel>

      <TabPanel
        header="Followed Discussions"
        pt={{
          content: {
            className: 'w-full',
          },
        }}
      >
        <FollowedDiscussionsFeed />
      </TabPanel>
    </TabView>
  )
}

export default memo(FeedTabs)
