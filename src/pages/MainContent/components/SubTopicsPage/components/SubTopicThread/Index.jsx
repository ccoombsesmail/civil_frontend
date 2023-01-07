import React, { useState, memo } from 'react'
import { useParams } from 'react-router-dom'

import { Tab } from 'react-bootstrap'

import useCategorizeComments from '../hooks/useCategorizeComments'
import { TabNav, Glider } from '../../../../../CommonComponents/NonBootstrapTabs/Style'
import TabContent from '../../../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index'
import TabNavItem from '../../../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index'
import CommentColumn from '../CommentColumn/Index'
import { ColumnContainer, ThreadContainer } from './Style/index'
import { ThemeTab } from '../../../../../CommonComponents/Tabs/Style'
import { Line } from '../../Style'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { useGetSubTopicQuery } from '../../../../../../api/services/subtopics.ts'
import { useGetAllCommentsQuery } from '../../../../../../api/services/comments.ts'

const SubTopicThread = () => {
  const { subTopicId, topicId } = useParams()
  const [key, setKey] = useState('all')
  const { currentUser } = useGetCurrentUser()

  const { data: subtopic, isLoading: isSubTopicLoading, isUninitialized: isSubTopicUninitialized } = useGetSubTopicQuery(subTopicId, {
    skip: !currentUser || !subTopicId,
  })

  const { data: comments } = useGetAllCommentsQuery(subTopicId, {
    skip: !currentUser,
  })

  const categorizedComments = useCategorizeComments(comments)
  const {
    POSITIVE: positiveComments,
    NEUTRAL: neutralComments,
    NEGATIVE: negativeComments,
    all: allComments,
  } = categorizedComments || {}

  return (

    <ThreadContainer>
      <Line />
      <TabNav>
        <TabNavItem title="All" id={0} activeTab={key} setActiveTab={setKey} contentCount={allComments?.length} />
        <TabNavItem title="Positive" id={1} activeTab={key} setActiveTab={setKey} contentCount={positiveComments?.length} />
        <TabNavItem title="Neutral" id={2} activeTab={key} setActiveTab={setKey} contentCount={neutralComments?.length} />
        <TabNavItem title="Negative" id={3} activeTab={key} setActiveTab={setKey} contentCount={negativeComments?.length} />

        <Glider className="glider" />
      </TabNav>

      <TabContent id={0} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={allComments} numComments={subtopic?.allComments} commentSentiment="All" color="white" />
        </ColumnContainer>
      </TabContent>
      <TabContent id={1} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={positiveComments} numComments={subtopic?.positiveComments} commentSentiment="Positive" color="white" />
        </ColumnContainer>
      </TabContent>
      <TabContent id={2} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={neutralComments} numComments={subtopic?.neutralComments} commentSentiment="Neutral" color="white" />
        </ColumnContainer>
      </TabContent>
      <TabContent id={3} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={negativeComments} numComments={subtopic?.negativeComments} commentSentiment="Negative" color="white" />
        </ColumnContainer>
      </TabContent>
    </ThreadContainer>
  )
}

export default memo(SubTopicThread)
