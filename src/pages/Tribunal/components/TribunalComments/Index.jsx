import React, { useState } from 'react'
import { Tab } from 'react-bootstrap'

import { Line } from '../../../CommonComponents/Line'
import { ThemeTab } from '../../../CommonComponents/Tabs/Style'
import CommentColumn from '../../../SubTopics/components/SubTopicThread/components/CommentColumn/Index'
import { ColumnContainer } from '../../../SubTopics/components/SubTopicThread/Style'
import useCategorizeComments from './hooks/useCategorizeComments'

const TribunalComments = () => {
  const [key, setKey] = useState('all')
  const comments = useCategorizeComments()
  return (
    <>
      <Line />
      <ThemeTab
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="all" title="All">
          <ColumnContainer>
            <CommentColumn numComments={comments?.allComments} comments={comments.all} commentSentiment="All" color="var(--m-primary-background-color)" />
          </ColumnContainer>
        </Tab>
        <Tab eventKey="Defendant" title="Defendant">
          <ColumnContainer>
            <CommentColumn numComments={comments?.positiveComments} comments={comments.Defendant} commentSentiment="Defendant" color="#6A6E70" />
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
      </ThemeTab>
    </>
  )
}

export default TribunalComments
