import React, { memo } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

import PopularDiscussionsFeed from './components/PopularDiscussionsFeed/PopularDiscussionsFeed'
import TrendingSpaces from './components/TrendingSpaces/TrendingSpaces'
import FollowedSpacesFeed from '../../../../../../CommonComponents/InfiniteLoaders/SharedFeeds/FollowedSpacesFeed/Index'
import FollowedDiscussionsFeed from '../../../../../../CommonComponents/InfiniteLoaders/SharedFeeds/FollowedDiscussionsFeed/Index'

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
