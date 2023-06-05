import React, { useState } from 'react'
import TabNavItem from '../../../../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index'
import TabContent from '../../../../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index'
import {
  TabNav,
} from '../../../../../../CommonComponents/NonBootstrapTabs/Style'
import PrimeFeed from './components/ForYouFeed/Index'
import FollowedSpacesFeed from './components/FollowedSpacesFeed/Index'

function SpaceTabs() {
  const [key, setKey] = useState(0)
  return (
    <>
      <TabNav>
        <TabNavItem
          onClick={() => setKey(0)}
          title="For You"
          id={0}
          activeTab={key}
          setActiveTab={setKey}
        />
        <TabNavItem
          onClick={() => setKey(1)}
          title="Trending"
          id={1}
          activeTab={key}
          setActiveTab={setKey}
        />
        <TabNavItem
          onClick={() => {
            setKey(2)
          }}
          title="Followed Spaces"
          id={2}
          activeTab={key}
          setActiveTab={setKey}
        />
      </TabNav>
      <TabContent id={0} activeTab={key}>
        <PrimeFeed />
      </TabContent>
      <TabContent id={2} activeTab={key}>
        <FollowedSpacesFeed />
      </TabContent>

    </>
  )
}

export default SpaceTabs
