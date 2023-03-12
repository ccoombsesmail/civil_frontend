/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useMemo } from 'react'
import { Tab, Nav } from 'react-bootstrap'

import { useGetUserTopicsQuery } from '../../../../api/services/topics.ts'
import { useLazyGetUserDiscussionsQuery } from '../../../../api/services/discussions.ts'
import { useLazyGetUserCommentsQuery } from '../../../../api/services/comments.ts'

import { StyledNav } from '../../Style'
import { Container } from './Style'
import TopicItem from '../../../pages/HomePage/components/Topics/components/TopicItem/Index'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import DiscussionItem from '../../../CommonComponents/DiscussionItem/Index'
import Comment from '../../../pages/DiscussionsPage/components/Comment/Index'
import { ParentCommentContext } from '../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'

function UserPosts({ profileUserId, user }) {
  const { currentUser } = useGetCurrentUser()
  const [activeKey, setActiveKey] = useState('0')
  const { data: topics, isLoading } = useGetUserTopicsQuery(profileUserId, {
    skip: !profileUserId,
  })
  console.log(profileUserId)
  const [getUserDiscussions, { data: discussions, isLoading: isDiscussionsLoading }] = useLazyGetUserDiscussionsQuery()
  const [getUserComments, { data: comments, isLoading: isCommentsLoading }] = useLazyGetUserCommentsQuery()
  return (
    <Container>
      <Tab.Container defaultActiveKey="0" onSelect={(key) => setActiveKey(key)}>
        <StyledNav activeKey={Number(activeKey)} backgroundColor="white">
          <div className="line" />
          <Nav.Item>
            <Nav.Link eventKey="0">Topics</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1" onClick={() => getUserDiscussions(profileUserId)}>Discussions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" onClick={() => getUserComments(profileUserId)}>Comments</Nav.Link>
          </Nav.Item>
        </StyledNav>
        <Tab.Content>
          <Tab.Pane eventKey="0">
            {activeKey === '0' && topics?.map((topic) => <TopicItem topic={topic} user={user} hideCommentButton />)}
          </Tab.Pane>
          <Tab.Pane eventKey="1">
            {
            activeKey === '1' ? (isDiscussionsLoading
              ? <CircleLoading size="20vw" /> : discussions?.map((discussion) => <DiscussionItem discussion={discussion} user={currentUser} hideCommentButton />))
              : null
            }

          </Tab.Pane>
          <Tab.Pane eventKey="2">
            {activeKey === '2' ? (isCommentsLoading
              ? <CircleLoading size="20vw" /> : comments?.map((comment, idx) => (
                <ParentCommentContext.Provider
                  key={comment.data?.id || String(idx)}
                  value={{
                    commentId: comment.data?.id,
                    topicId: null,
                    isReplies: false,
                  }}
                >
                  <Comment
                    key={comment.data?.id || String(idx)}
                    level={0}
                    commentData={comment.data}
                    replies={comment.children}
                  />
                </ParentCommentContext.Provider>
              ))) : null}
          </Tab.Pane>
        </Tab.Content>

      </Tab.Container>

    </Container>

  )
}
export default UserPosts
