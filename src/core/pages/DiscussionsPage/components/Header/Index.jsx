/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useRef } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
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
import Card from '../../../../CommonComponents/SpaceCard/Index'
import DiscussionCard from './components/DiscussionCard/Index'
import { uuidRegEx } from '../../../../../generic/regex/uuid'
import UserUploadedMedia from '../../../../CommonComponents/SpaceCard/components/UserUploadedMedia/Index'
import useInitLexicalConfig from '../../../../hooks/lexical/useInitLexicalConfig'

function TooltipComponent({ text, title, reference }) {
  return (
    <OverlayTrigger
      placement="top"
      overlay={(
        <Tooltip>
          <strong>{title}</strong>
        </Tooltip>
      )}
    >
      <span onClick={() => reference?.current?.scrollIntoView()}>{text}</span>
    </OverlayTrigger>
  )
}

function Header() {
  let content = null
  const { spaceId } = useParams()
  const { pathname } = useLocation()
  const discussionId = pathname.match(uuidRegEx)?.[1]
  const { currentUser } = useGetCurrentUser()
  const { data: space, isLoading: isSpaceLoading, isUninitialized: isSpaceUninitialized } = useGetSpaceQuery(spaceId, {
    skip: !currentUser || !spaceId,
  })

  const { data: discussion, isDiscussionLoading, isDiscussionUninitialized } = useGetDiscussionQuery(discussionId, {
    skip: !currentUser || !discussionId,
  })

  const commonProps = useMemo(() => ({
    space, user: currentUser, showLinks: true, hideCommentButton: Boolean(discussionId) && (discussion?.title && discussion.title !== 'General'),
  }), [space, currentUser, discussionId, discussion])

  const spaceRef = useRef(null)

  const linkType = space?.externalContentData?.linkType
  const initLexicalConfig = useInitLexicalConfig(space?.editorState, 'Civil-Space-Card__Discussions', false)

  if (isSpaceUninitialized) return null
  if (isSpaceLoading) return <CircleLoading size="20vw" />

  if (linkType === YouTube) {
    content = (
      <VideoPlayer
        loading="lazy"
        src={`https://www.youtube.com/embed/${space.externalContentData?.embedId}`}
        frameBorder="0"
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
  } else if (space?.createdByVodUrl || space?.createdByImageUrl) {
    content = (
      <UserUploadedMedia
        videoFile={space.userUploadedVodUrl}
        imgFile={space.userUploadedImageUrl}
      />
    )
  } else {
    content = null
  }


  return (
    <Container>
      <h1 className="text-focus-in">
        <>
          {'We\'re Talking About This'}
          {' '}
          <TooltipComponent text="Space" title={space?.title} reference={spaceRef} />
        </>
      </h1>
      <div style={{ width: '100%' }}>
        <LexicalComposer initialConfig={initLexicalConfig}>
          <Card {...commonProps}>
            {content}
          </Card>
        </LexicalComposer>
      </div>
      <div style={{
        width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative',
      }}
      >
        {discussion && discussionId ?  <DiscussionCard key={discussionId} discussion={discussion} isDiscussionLoading={isDiscussionLoading} isDiscussionUninitialized={isDiscussionUninitialized} /> : null}
      </div>
    </Container>

  )
}

export default Header
