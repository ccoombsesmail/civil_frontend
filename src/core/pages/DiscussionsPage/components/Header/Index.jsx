/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useRef } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { TweetComponent } from '../../../../CommonComponents/Lexical/nodes/TweetNode.tsx'
import PlaygroundEditorTheme from '../../../../CommonComponents/Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../../../CommonComponents/Lexical/nodes/PlaygroundNodes.ts'
import LinkMetaData from '../../../../Forms/components/LinkMetaData/Index'

import {
  Container,
} from './Style/index'
import { useGetTopicQuery } from '../../../../../api/services/topics.ts'
import { useGetDiscussionQuery } from '../../../../../api/services/discussions.ts'

import { useGetLinkMetaDataQuery } from '../../../../../api/services/links.ts'

import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import { Twitter, Web, YouTube } from '../../../../../enums/link_type'
import { VideoPlayer } from '../../../HomePage/components/Topics/components/TopicItem/Style'
import Card from '../../../../CommonComponents/TopicCard/Index'
import DiscussionCard from './components/DiscussionCard/Index'
import { uuidRegEx } from '../../../../../generic/regex/uuid'
import UserUploadedMedia from '../../../../CommonComponents/TopicCard/components/UserUploadedMedia/Index'

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
  const { topicId } = useParams()
  const { pathname } = useLocation()
  const discussionId = pathname.match(uuidRegEx)?.[1]
  const { currentUser } = useGetCurrentUser()
  const { data: topic, isLoading: isTopicLoading, isUninitialized: isTopicUninitialized } = useGetTopicQuery(topicId, {
    skip: !currentUser || !topicId,
  })

  const { data: discussion } = useGetDiscussionQuery(discussionId, {
    skip: !currentUser || !discussionId,
  })

  const commonProps = useMemo(() => ({
    topic, user: currentUser, showLinks: true, hideCommentButton: Boolean(discussionId) && (discussion?.title && discussion.title !== 'General'),
  }), [topic, currentUser, discussionId, discussion])

  const topicRef = useRef(null)

  const linkType = topic?.externalContentData?.linkType
  const { data: metaData, isLoading } = useGetLinkMetaDataQuery(topic?.externalContentData?.externalContentUrl, {
    skip: linkType !== Web,
  })

  if (isTopicUninitialized) return null
  if (isTopicLoading) return <CircleLoading size="20vw" />

  if (linkType === YouTube) {
    content = (
      <VideoPlayer
        loading="lazy"
        src={`https://www.youtube.com/embed/${topic.externalContentData?.embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      />
    )
  } else if (linkType === Twitter) {
    content = (
      <TweetComponent
        tweetID={topic.externalContentData?.embedId}
        format=""
        className={{
          base: '',
          focus: '',
        }}
        loadingComponent={<CircleLoading size={20} />}
      />
    )
  } else if (linkType === Web) {
    content = isLoading ? <CircleLoading size={40} /> : <LinkMetaData metaData={metaData} isLoading={isLoading} />
  } else if (topic?.createdByVodUrl || topic?.createdByImageUrl) {
    content = (
      <UserUploadedMedia
        videoFile={topic.userUploadedVodUrl}
        imgFile={topic.userUploadedImageUrl}
      />
    )
  } else {
    content = null
  }

  const initialConfig = {
    editorState: JSON.parse(topic.description),
    namespace: 'Civil-Topic-Card__Discussions',
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    editable: false,
    theme: PlaygroundEditorTheme,
  }

  return (
    <Container>
      <h1 className="text-focus-in">
        <>
          {'We\'re Talking About This'}
          {' '}
          <TooltipComponent text="Topic" title={topic?.title} reference={topicRef} />
        </>
      </h1>
      <div style={{ width: '100%' }}>
        <LexicalComposer initialConfig={initialConfig}>
          <Card {...commonProps}>
            {content}
          </Card>
        </LexicalComposer>
      </div>
      <div style={{
        width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative',
      }}
      >
        <DiscussionCard />
      </div>
    </Container>

  )
}

export default Header
