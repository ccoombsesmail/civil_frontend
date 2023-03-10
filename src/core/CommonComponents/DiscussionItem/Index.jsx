/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { useGetLinkMetaDataQuery } from '../../../api/services/links.ts'
import { Web, YouTube, Twitter } from '../../../enums/link_type'

import { VideoPlayer } from './Style'
import { TweetComponent } from '../Lexical/nodes/TweetNode.tsx'
import PlaygroundNodes from '../Lexical/nodes/PlaygroundNodes.ts'
import PlaygroundEditorTheme from '../Lexical/themes/PlaygroundEditorTheme.ts'
import Card from '../TopicCard/Index'

import { CircleLoading } from '../../../svgs/spinners/CircleLoading'
import LinkMetaData from '../../Forms/components/LinkMetaData/Index'
import UserUploadedMedia from '../TopicCard/components/UserUploadedMedia/Index'
import LineWithOverlayText from '../../pages/DiscussionsPage/components/LineWithTextOverlay/Index'

function DiscussionItem({ discussion, currentUser }) {
  const commonProps = useMemo(() => ({
    topic: null, user: currentUser, showLinks: true, discussion,
  }), [discussion, currentUser])
  const linkType = discussion?.externalContentData?.linkType
  const { data: metaData, isLoading } = useGetLinkMetaDataQuery(discussion?.externalContentData?.externalContentUrl, {
    skip: linkType !== Web,
  })

  let content
  if (linkType === YouTube) {
    content = (
      <VideoPlayer
        loading="lazy"
        src={`https://www.youtube.com/embed/${discussion.externalContentData?.embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      />
    )
  } else if (linkType === Twitter) {
    content = (
      <TweetComponent
        tweetID={discussion.externalContentData?.embedId}
        format=""
        className={{
          base: '',
          focus: '',
        }}
        loadingComponent={<CircleLoading size={20} />}
      />
    )
  } else if (linkType === Web) {
    content = <LinkMetaData metaData={metaData} isLoading={isLoading} />
  } else if (discussion?.createdByVodUrl || discussion?.createdByImageUrl) {
    content = <UserUploadedMedia {...commonProps} />
  } else {
    content = null
  }
  const initialConfig = {
    editorState: discussion?.editorState,
    namespace: 'Civil-Discussion-Card',
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    editable: false,
    theme: PlaygroundEditorTheme,
  }
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Card {...commonProps}>
        {content}
      </Card>
    </LexicalComposer>

  )
}

export default DiscussionItem
