/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

import { useGetUserSpacesQuery } from '../../../../api/services/spaces.ts'
import { useLazyGetUserDiscussionsQuery } from '../../../../api/services/discussions.ts'
import { useLazyGetUserCommentsQuery } from '../../../../api/services/comments.ts'

import { Container } from './Style'
import SpaceItem from '../../../pages/HomePage/components/Spaces/components/SpaceItem/Index'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import DiscussionItem from '../../../CommonComponents/DiscussionItem/Index'
import Comment from '../../../pages/DiscussionsPage/components/Comment/Index'
import { ParentCommentContext } from '../../../pages/DiscussionsPage/components/CommentColumn/ParentCommentContext.tsx'
import { CircleLoading } from '../../../../svgs/spinners/CircleLoading'

function UserPosts({ profileUserId, user }) {
  const { currentUser } = useGetCurrentUser()
  const { data: spaces } = useGetUserSpacesQuery(profileUserId, {
    skip: !profileUserId,
  })
  const [activeIndex, setActiveIndex] = useState(0)

  const [getUserDiscussions, { data: discussions, isLoading: isDiscussionsLoading }] = useLazyGetUserDiscussionsQuery()
  const [getUserComments, { data: comments, isLoading: isCommentsLoading }] = useLazyGetUserCommentsQuery()

  const onTabChange = useCallback((e) => {
    if (e.index === 1) {
      getUserDiscussions(profileUserId)
    } else if (e.index === 2) {
      getUserComments(profileUserId)
    }
    setActiveIndex(e.index)
  }, [getUserDiscussions, getUserComments])

  return (
    <Container>
      <div className="line" />
      <TabView
        activeIndex={activeIndex}
        className="w-full"
        onTabChange={onTabChange}
      >
        <TabPanel
          header="Spaces"
          pt={{
            content: {
              className: 'w-full',
            },
          }}
        >
          {spaces?.map((space) => <SpaceItem space={space} user={user} hideCommentButton />)}
        </TabPanel>
        <TabPanel
          header="Discussions"
          pt={{
            content: {
              className: 'w-full',
            },
          }}
        >
          {
            isDiscussionsLoading
              ? <CircleLoading size="20vw" /> : discussions?.map((discussion) => <DiscussionItem discussion={discussion} user={currentUser} hideCommentButton />)
          }

        </TabPanel>
        <TabPanel
          header="Comments"
          pt={{
            content: {
              className: 'w-full',
            },
          }}
        >
          { isCommentsLoading
            ? <CircleLoading size="20vw" /> : comments?.map((comment, idx) => (
              <ParentCommentContext.Provider
                key={comment.data?.id || String(idx)}
                value={{
                  commentId: comment.data?.id,
                  spaceId: null,
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
            ))}
        </TabPanel>
      </TabView>
    </Container>

  )
}
export default UserPosts
