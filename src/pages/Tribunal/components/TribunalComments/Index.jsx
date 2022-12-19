import React, { useState } from 'react'

import { Line } from '../../../CommonComponents/Line'
import TabContent from '../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index'
import TabNavItem from '../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index'
import { Glider, TabNav } from '../../../CommonComponents/NonBootstrapTabs/Style'
import CommentColumn from '../../../MainContent/components/SubTopicsPage/components/CommentColumn/Index'
import { ColumnContainer } from '../../../MainContent/components/SubTopicsPage/components/CommentThread/Style'
import useCategorizeComments from './hooks/useCategorizeComments'
import { Container } from './Style/index'

const TribunalComments = ({ tribunalComments }) => {
  const [key, setKey] = useState(0)
  const comments = useCategorizeComments(tribunalComments)
  return (
    <>
      <Line />
      <Container>
        <TabNav>
          <TabNavItem title="All" id={0} activeTab={key} setActiveTab={setKey} contentCount={23} />
          <TabNavItem title="Defendant" id={1} activeTab={key} setActiveTab={setKey} />
          <TabNavItem title="Reporters" id={2} activeTab={key} setActiveTab={setKey} />
          <TabNavItem title="Jury" id={3} activeTab={key} setActiveTab={setKey} />
          <TabNavItem title="General" id={4} activeTab={key} setActiveTab={setKey} />

          <Glider className="glider" />
        </TabNav>

        <TabContent id={0} activeTab={key}>
          <ColumnContainer>
            <CommentColumn comments={comments.all} commentSentiment="All" color="var(--m-primary-background-color)" />
          </ColumnContainer>
        </TabContent>
        <TabContent id={1} activeTab={key}>
          <ColumnContainer>
            <CommentColumn comments={comments.Defendant} commentSentiment="Defendant" color="#6A6E70" />
          </ColumnContainer>
        </TabContent>
        <TabContent id={2} activeTab={key}>
          <ColumnContainer>
            <CommentColumn comments={comments.Reporter} commentSentiment="Reporter" color="#474A4F" />
          </ColumnContainer>
        </TabContent>
        <TabContent id={3} activeTab={key}>
          <ColumnContainer>
            <CommentColumn comments={comments.Jury} commentSentiment="Jury" color="var(--m-primary-background-color)" />
          </ColumnContainer>
        </TabContent>
        <TabContent id={4} activeTab={key}>
          <ColumnContainer>
            <CommentColumn comments={comments.General} commentSentiment="General Public" color="var(--m-primary-background-color)" />
          </ColumnContainer>
        </TabContent>
        {/* <StyledThemeTab
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="all" title="All">
        <ColumnContainer>
          <CommentColumn comments={comments.all} commentSentiment="All" color="var(--m-primary-background-color)" />
        </ColumnContainer>
      </Tab>
      <Tab eventKey="Defendant" title="Defendant">
        <ColumnContainer>
          <CommentColumn comments={comments.Defendant} commentSentiment="Defendant" color="#6A6E70" />
        </ColumnContainer>
      </Tab>
      <Tab eventKey="Reporter" title="Reporters">
        <ColumnContainer>
          <CommentColumn comments={comments.Reporter} commentSentiment="Reporter" color="#474A4F" />
        </ColumnContainer>
      </Tab>
      <Tab eventKey="Jury" title="Jury">
        <ColumnContainer>
          <CommentColumn comments={comments.Jury} commentSentiment="Jury" color="var(--m-primary-background-color)" />
        </ColumnContainer>
      </Tab>
      <Tab eventKey="General" title="General Public">
        <ColumnContainer>
          <CommentColumn comments={comments.General} commentSentiment="General Public" color="var(--m-primary-background-color)" />
        </ColumnContainer>
      </Tab>
    </StyledThemeTab> */}
      </Container>

    </>
  )
}

export default TribunalComments
