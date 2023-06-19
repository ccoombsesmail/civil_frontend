import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

import PrimeFeed from './components/ForYouFeed/Index'
import FollowedSpacesFeed from './components/FollowedSpacesFeed/Index'
import PopularDiscussionsFeed from './components/PopularDiscussionsFeed/PopularDiscussionsFeed'

function SpaceTabs() {
  return (
    <TabView
      className="w-full"
      pt={{
        panelContainer: {
          className: 'p-0',
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
        header="For You"
        pt={{
          content: {
            className: 'w-full',
          },
        }}
      >
        <PrimeFeed />
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
    </TabView>
  )
}

export default SpaceTabs
