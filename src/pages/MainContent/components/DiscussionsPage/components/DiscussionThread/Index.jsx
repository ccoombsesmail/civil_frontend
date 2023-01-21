/* eslint-disable no-unused-vars */
import React, { useState, memo } from 'react'
import { useParams } from 'react-router-dom'

import useCategorizeComments from '../hooks/useCategorizeComments'
import { TabNav, Glider } from '../../../../../CommonComponents/NonBootstrapTabs/Style'
import TabContent from '../../../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index'
import TabNavItem from '../../../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index'
import CommentColumn from '../CommentColumn/Index'
import { ColumnContainer, ThreadContainer } from './Style/index'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'
import { useGetDiscussionQuery } from '../../../../../../api/services/discussions.ts'
import { useGetAllCommentsQuery } from '../../../../../../api/services/comments.ts'

const DiscussionThread = () => {
  const { topicId, discussionId } = useParams()
  const [key, setKey] = useState(0)
  const { currentUser } = useGetCurrentUser()

  const { data: discussion, isLoading: isDiscussionLoading, isUninitialized: isDiscussionUninitialized } = useGetDiscussionQuery(discussionId, {
    skip: !currentUser || !discussionId,
  })

  const { data: comments } = useGetAllCommentsQuery(discussionId, {
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
      <TabNav>
        <TabNavItem title="All" id={0} activeTab={key} setActiveTab={setKey} contentCount={allComments?.length} />
        <TabNavItem title="Positive" id={1} activeTab={key} setActiveTab={setKey} contentCount={positiveComments?.length} />
        <TabNavItem title="Neutral" id={2} activeTab={key} setActiveTab={setKey} contentCount={neutralComments?.length} />
        <TabNavItem title="Negative" id={3} activeTab={key} setActiveTab={setKey} contentCount={negativeComments?.length} />

        <Glider className="glider" />
      </TabNav>

      <TabContent id={0} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={allComments} numComments={discussion?.allComments} commentSentiment="All" color="white" topicId={topicId} />
        </ColumnContainer>
      </TabContent>
      <TabContent id={1} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={positiveComments} numComments={discussion?.positiveComments} commentSentiment="Positive" color="white" topicId={topicId} />
        </ColumnContainer>
      </TabContent>
      <TabContent id={2} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={neutralComments} numComments={discussion?.neutralComments} commentSentiment="Neutral" color="white" topicId={topicId} />
        </ColumnContainer>
      </TabContent>
      <TabContent id={3} activeTab={key}>
        <ColumnContainer>
          <CommentColumn comments={negativeComments} numComments={discussion?.negativeComments} commentSentiment="Negative" color="white" topicId={topicId} />
        </ColumnContainer>
      </TabContent>
    </ThreadContainer>
  )
}

export default memo(DiscussionThread)
