import React, { useState, useEffect, useCallback } from "react";
import TabNavItem from "../../../../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index";
import TabContent from "../../../../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index";
import {
  TabNav,
} from "../../../../../../CommonComponents/NonBootstrapTabs/Style";

import ForYouFeed from "./components/ForYouFeed/Index";
import { useLazyGetAllFollowedTopicsQuery } from "../../../../../../../api/services/topics";
import FollowedTopicsFeed from "./components/FollowedTopicsFeed/Index";

function TopicTabs() {
  const [key, setKey] = useState(0);
  const [
    getFollowedTopics,
    { data: followedTopics, isLoading: isLoadingFollowedTopics, isUninitialized },
  ] = useLazyGetAllFollowedTopicsQuery();
  
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
            getFollowedTopics()
          }}
          title="Followed Topics"
          id={2}
          activeTab={key}
          setActiveTab={setKey}
        />

        
      </TabNav>
      <TabContent id={0} activeTab={key}>
        <ForYouFeed />
      </TabContent>
      <TabContent id={2} activeTab={key}>
        <FollowedTopicsFeed />
      </TabContent>
    </>
  );
}

export default TopicTabs;
