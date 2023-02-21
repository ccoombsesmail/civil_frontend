import React, { useState } from 'react'

import { Line } from '../../../CommonComponents/Line'
import TabContent from '../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index'
import TabNavItem from '../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index'
import { Glider, TabNav } from '../../../CommonComponents/NonBootstrapTabs/Style'
import CommentColumn from '../../../pages/DiscussionsPage/components/CommentColumn/Index'
import { ColumnContainer } from '../../../pages/DiscussionsPage/components/CommentThread/Style'
import useCategorizeComments from './hooks/useCategorizeComments'
import { Container } from './Style/index'

function TribunalComments({ tribunalComments }) {
  const [key, setKey] = useState(0)
  const comments = useCategorizeComments(tribunalComments)
  return (
    <>
      <Line />
      <Container>
        <TabNav>
          <TabNavItem title="All" id={0} activeTab={key} setActiveTab={setKey} contentCount={comments.all?.length} />
          <TabNavItem title="Defendant" id={1} activeTab={key} setActiveTab={setKey} contentCount={comments.Defendant?.length} />
          <TabNavItem title="Reporters" id={2} activeTab={key} setActiveTab={setKey} contentCount={comments.Reporter?.length} />
          <TabNavItem title="Jury" id={3} activeTab={key} setActiveTab={setKey} contentCount={comments.Jury?.length} />
          <TabNavItem title="General" id={4} activeTab={key} setActiveTab={setKey} contentCount={comments.General?.length} />

          <Glider className="glider" />
        </TabNav>

        <TabContent id={0} activeTab={key}>
          <ColumnContainer>
            <CommentColumn comments={comments.all} commentSentiment="All" color="white" />
          </ColumnContainer>
        </TabContent>
        <TabContent id={1} activeTab={key}>
          <ColumnContainer>
            <CommentColumn comments={comments.Defendant} commentSentiment="Defendant" color="white" />
          </ColumnContainer>
        </TabContent>
        <TabContent id={2} activeTab={key}>
          <ColumnContainer>
            <CommentColumn comments={comments.Reporter} commentSentiment="Reporter" color="white" />
          </ColumnContainer>
        </TabContent>
        <TabContent id={3} activeTab={key}>
          <ColumnContainer>
            <CommentColumn comments={comments.Jury} commentSentiment="Jury" color="white" />
          </ColumnContainer>
        </TabContent>
        <TabContent id={4} activeTab={key}>
          <ColumnContainer>
            <CommentColumn comments={comments.General} commentSentiment="General Public" color="white" />
          </ColumnContainer>
        </TabContent>
      </Container>

    </>
  )
}

export default TribunalComments
