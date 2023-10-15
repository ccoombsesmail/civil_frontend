import React from 'react'
import { useSelector } from 'react-redux'

import { useLocation, useParams } from 'react-router-dom'
import { TabView, TabPanel } from 'primereact/tabview'
import { ScrollPanel } from 'primereact/scrollpanel'

import RecommendationsList from '../../../../RecommendationsList/Index'
import { useGetSimilarSpacesQuery } from '../../../../../api/services/spaces.ts'
import { useGetSimilarDiscussionsQuery } from '../../../../../api/services/discussions.ts'
import DiscussionRecItem from '../../../../RecommendationsList/components/DiscussionRecItem/Index'
import SpaceRecItem from '../../../../RecommendationsList/components/RecItem/Index'

const uuidRegEx = /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g

function Recommendations() {
  const { spaceId } = useParams()
  const { pathname } = useLocation()
  const [id1, discussionId] = pathname.match(uuidRegEx)

  const { data } = useGetSimilarSpacesQuery(spaceId)
  const { data: similarDiscussions } = useGetSimilarDiscussionsQuery(discussionId, {
    skip: !discussionId,
  })
  const opposingRecs = useSelector((s) => s.recommendations.opposingRecs)
  return (
    <TabView
      scrollable
      className="pb-5 rec-tabs tabview"
      pt={{
        panelContainer: {
          className: 'p-0',
        },
      }}
    >
      <TabPanel
        header="Similar Spaces"
      >
        <ScrollPanel style={{ width: '100%', height: '100vh' }} className="custombar1">
          <RecommendationsList recs={data} RecItem={SpaceRecItem} />
        </ScrollPanel>
      </TabPanel>
      <TabPanel header="Similar Discussions">
        <ScrollPanel style={{ width: '100%', height: '100vh' }} className="custombar1">
          <RecommendationsList recs={similarDiscussions} RecItem={DiscussionRecItem} />
        </ScrollPanel>
      </TabPanel>
      <TabPanel header="Opposing Views">
        <RecommendationsList recs={opposingRecs} />
      </TabPanel>
    </TabView>
  )
}

export default Recommendations
