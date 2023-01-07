import React, { useState, memo } from 'react'
import { useParams } from 'react-router-dom'

import useCategorizeComments from '../hooks/useCategorizeComments'

import CommentColumn from '../CommentColumn/Index'
import { ColumnContainer, ThreadContainer } from './Style/index'
import { TabNav, Glider } from '../../../../../CommonComponents/NonBootstrapTabs/Style'
import TabContent from '../../../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index'
import TabNavItem from '../../../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index'

import { Line } from '../../Style'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { useGetAllCommentRepliesQuery } from '../../../../../../api/services/comments.ts'
import { useGetTopicQuery } from '../../../../../../api/services/topics.ts'

const CommentThread = () => {
  const { commentId, topicId, subTopicId } = useParams()
  const { currentUser } = useGetCurrentUser()

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isUninitialized: isCommentsUninitialized,
  } = useGetAllCommentRepliesQuery(commentId, { skip: !currentUser })

  const {
    data: topic,
    isLoading: isTopicLoading,
    isUninitialized: isTopicUninitialized,
  } = useGetTopicQuery(topicId, {
    skip: !currentUser,
  })
  const [key, setKey] = useState(0)

  const {
    POSITIVE: positiveComments,
    NEUTRAL: neutralComments,
    NEGATIVE: negativeComments,
    all: allComments,
  } = useCategorizeComments(comments?.replies)

  return (

    <ThreadContainer>
      <Line />
      <TabNav>
        <TabNavItem title="All" id={0} activeTab={key} setActiveTab={setKey} contentCount={allComments?.length} />
        <TabNavItem title="Positive" id={1} activeTab={key} setActiveTab={setKey} contentCount={positiveComments?.length} />
        <TabNavItem title="Neutral" id={2} activeTab={key} setActiveTab={setKey} contentCount={neutralComments?.length} />
        <TabNavItem title="Neative" id={3} activeTab={key} setActiveTab={setKey} contentCount={negativeComments?.length} />

        <Glider className="glider" />
      </TabNav>

      <TabContent id={0} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={allComments} commentSentiment="All" color="white" />
        </ColumnContainer>
      </TabContent>
      <TabContent id={1} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={positiveComments} commentSentiment="Positive" color="white" />
        </ColumnContainer>
      </TabContent>
      <TabContent id={2} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={neutralComments} commentSentiment="Neutral" color="white" />
        </ColumnContainer>
      </TabContent>
      <TabContent id={3} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={negativeComments} commentSentiment="Negative" color="white" />
        </ColumnContainer>
      </TabContent>
    </ThreadContainer>
  )
}

export default memo(CommentThread)
