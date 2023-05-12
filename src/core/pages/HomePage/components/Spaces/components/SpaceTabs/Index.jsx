import React, { useState, useEffect, useCallback } from "react";
import TabNavItem from "../../../../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index";
import TabContent from "../../../../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index";
import {
  TabNav,
} from "../../../../../../CommonComponents/NonBootstrapTabs/Style";

import ForYouFeed from "./components/ForYouFeed/Index";
import { useLazyGetAllFollowedSpacesQuery } from "../../../../../../../api/services/spaces";
import FollowedSpacesFeed from "./components/FollowedSpacesFeed/Index";

function SpaceTabs() {
  const [key, setKey] = useState(0);
  const [
    getFollowedSpaces,
    { data: followedSpaces, isLoading: isLoadingFollowedSpaces, isUninitialized },
  ] = useLazyGetAllFollowedSpacesQuery();
  
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
            getFollowedSpaces()
          }}
          title="Followed Spaces"
          id={2}
          activeTab={key}
          setActiveTab={setKey}
        />

        
      </TabNav>
      <TabContent id={0} activeTab={key}>
        <ForYouFeed />
      </TabContent>
      <TabContent id={2} activeTab={key}>
        <FollowedSpacesFeed />
      </TabContent>
    </>
  );
}

export default SpaceTabs;
