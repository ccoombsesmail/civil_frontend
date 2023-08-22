import React, { memo } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

import FollowedSpacesFeed from '../../../../CommonComponents/InfiniteLoaders/SharedFeeds/FollowedSpacesFeed/Index'
import FollowedDiscussionsFeed from '../../../../CommonComponents/InfiniteLoaders/SharedFeeds/FollowedDiscussionsFeed/Index'

function SavedContent() {
  return (
    <div className="flex flex-column align-items-center my-4">
      <h1>Your Saved Content</h1>
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
    </div>

  )
}

export default memo(SavedContent)
