/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { Button } from 'primereact/button'
import { TweetComponent } from '../../../../CommonComponents/Lexical/nodes/TweetNode.tsx'
import LinkMetaData from '../../../../Forms/components/LinkMetaData/Index'

import {
  Container,
} from './Style/index'
import { useGetSpaceQuery } from '../../../../../api/services/spaces.ts'
import { useGetDiscussionQuery } from '../../../../../api/services/discussions.ts'

import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import { Twitter, Web, YouTube } from '../../../../../enums/link_type'
import { VideoPlayer } from '../../../HomePage/components/Spaces/components/SpaceItem/Style'
import Card from '../../../../CommonComponents/PostCard/Index'
import DiscussionCard from './components/DiscussionCard/Index'
import { uuidRegEx } from '../../../../../generic/regex/uuid'
import UserUploadedMedia from '../../../../CommonComponents/PostCard/components/UserUploadedMedia/Index'
import useInitLexicalConfig from '../../../../hooks/lexical/useInitLexicalConfig'
import SpaceActionToolbar from '../../../../CommonComponents/ActionToolbars/SpaceToolbar/Index'
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs'
import { SpaceItemContext } from '../../../../CommonComponents/InfiniteLoaders/ContentItems/SpaceItem/SpaceItemContext.tsx'
import { DiscussionItemContext } from '../../../../CommonComponents/InfiniteLoaders/ContentItems/DiscussionItem/DiscussionItemContext.tsx'

function Header({ isOpen, setIsOpen }) {
  let content = null
  const { spaceId } = useParams()
  const { pathname } = useLocation()
  const discussionId = pathname.match(uuidRegEx)?.[1]

  const { currentUser } = useGetCurrentUser()
  const { data: space, isLoading: isSpaceLoading, isUninitialized: isSpaceUninitialized } = useGetSpaceQuery(spaceId, {
    skip: !spaceId,
  })

  const { data: discussion, isDiscussionLoading, isDiscussionUninitialized } = useGetDiscussionQuery(discussionId, {
    skip: !discussionId,
  })

  const commonProps = useMemo(() => ({
    space, user: currentUser, showLinks: true, hideCommentButton: Boolean(discussionId) && (discussion?.title && discussion.title !== 'General'),
  }), [space, currentUser, discussionId, discussion])

  const spaceContextValue = useMemo(() => ({
    updateFocusedSpaceQuery: true,
  }), [])

  const discussionContextValue = useMemo(() => ({
    spaceId: discussion?.spaceId, updateFocusedDiscussionQuery: true,
  }), [discussion])

  const linkType = space?.externalContentData?.linkType
  const initLexicalConfig = useInitLexicalConfig(space?.editorState, 'Civil-Space-Card__Discussions', false)

  if (isSpaceUninitialized) return null
  if (isSpaceLoading) return <CircleLoading size="20vw" />

  if (linkType === YouTube) {
    content = (
      <VideoPlayer
        loading="lazy"
        src={`https://www.youtube.com/embed/${space.externalContentData?.embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      />
    )
  } else if (linkType === Twitter) {
    content = (
      <TweetComponent
        tweetID={space.externalContentData?.embedId}
        format=""
        className={{
          base: '',
          focus: '',
        }}
        loadingComponent={<CircleLoading size={20} />}
      />
    )
  } else if (linkType === Web) {
    content = <LinkMetaData url={space.externalContentData?.externalContentUrl} />
  } else if (space.userUploadedImageUrl) {
    content = (
      <UserUploadedMedia
        imgFile={space.userUploadedImageUrl}
      />
    )
  } else {
    content = null
  }

  return (
    <Container>
      <Button
        size="small"
        icon={`pi ${isOpen ? 'pi-arrow-left' : 'pi-arrow-right'}`}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-0 top-0 -translate-x-100 focus:shadow-none  border-noround-right"
      />
      <BreadCrumbs />
      <div style={{ width: '100%' }}>
        <LexicalComposer initialConfig={initLexicalConfig}>
          <SpaceItemContext.Provider value={spaceContextValue}>
            <Card
              {...commonProps}
              CardToolbar={(
                <SpaceActionToolbar
                  space={space}
                />
            )}
            >
              {content}
            </Card>
          </SpaceItemContext.Provider>
        </LexicalComposer>
      </div>
      <div style={{
        width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative',
      }}
      >
        {
        discussion && discussionId
          ? (

            <DiscussionItemContext.Provider value={discussionContextValue}>
              <DiscussionCard
                key={discussionId}
                discussion={discussion}
                isDiscussionLoading={isDiscussionLoading}
                isDiscussionUninitialized={isDiscussionUninitialized}
              />
            </DiscussionItemContext.Provider>
          )
          : null
        }
      </div>
    </Container>

  )
}

export default Header
