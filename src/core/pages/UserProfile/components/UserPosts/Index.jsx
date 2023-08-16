/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

import { useLazyGetUserCommentsQuery } from '../../../../../api/services/comments.ts'

import { Container } from './Style'

import CommentItem from '../../../../CommonComponents/InfiniteLoaders/ContentItems/CommentItem/CommentItem'
import { ParentCommentContext } from '../../../../CommonComponents/InfiniteLoaders/ContentItems/CommentItem/ParentCommentContext.tsx'

import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import UserSpacesFeed from './UserPostFeeds/UserSpacesFeed'
import UserDiscussionsFeed from './UserPostFeeds/UserDiscussionsFeed'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'

function UserPosts({ profileUserId, usernameDisplay }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const [getUserComments, { data: comments, isLoading: isCommentsLoading }] = useLazyGetUserCommentsQuery()

  const onTabChange = useCallback((e) => {
    if (e.index === 2) {
      getUserComments(profileUserId)
    }
    setActiveIndex(e.index)
  }, [getUserComments])

  return (
    <Container>
      <h1>{`${longUsernameDisplay(usernameDisplay)}'s Activity`}</h1>
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
          <UserSpacesFeed profileUserId={profileUserId} />
        </TabPanel>
        <TabPanel
          header="Discussions"
          pt={{
            content: {
              className: 'w-full',
            },
          }}
        >
          <UserDiscussionsFeed profileUserId={profileUserId} />
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
                <CommentItem
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
