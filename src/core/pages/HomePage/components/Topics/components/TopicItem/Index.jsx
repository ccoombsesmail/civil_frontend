/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, forwardRef } from 'react'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import LinkMetaData from '../../../../../../Forms/components/LinkMetaData/Index'
import { VideoPlayer } from './Style'
import { TweetComponent } from '../../../../../../CommonComponents/Lexical/nodes/TweetNode.tsx'
import { Twitter, Web, YouTube } from '../../../../../../../enums/link_type'
import Card from '../../../../../../CommonComponents/TopicCard/Index'

import { CircleLoading } from '../../../../../../../svgs/spinners/CircleLoading'
import useGoToDiscussions from '../../../../../../hooks/routing/useGoToDiscussions'
import PlaygroundEditorTheme from '../../../../../../CommonComponents/Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../../../../../CommonComponents/Lexical/nodes/PlaygroundNodes.ts'
import UserUploadedMedia from '../../../../../../CommonComponents/TopicCard/components/UserUploadedMedia/Index'

const TopicItem = ({
  topic, user, hideCommentButton, id, currentPage 
}) => {
 
  const goToDiscussion = useGoToDiscussions(topic.id)
  const initialConfig = {
    editorState: topic?.editorState,
    namespace: `Civil-${topic.title}`,
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    editable: false,
    theme: PlaygroundEditorTheme,
  }

  const commonProps = useMemo(
    () => ({
      topic,
      user,
      showLinks: false,
      hideCommentButton,
      onClick: goToDiscussion,
      currentPage
    }),
    [topic, user, currentPage],
  )

  const linkType = topic.externalContentData?.linkType

  let cardbody = null

  if (linkType === YouTube) {
    cardbody = (
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
    cardbody = (
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
    cardbody = <LinkMetaData url={topic?.externalContentData?.externalContentUrl} /> // metaData={metaData.data} isLoading={isLoading}
  } else if (topic?.userUploadedImageUrl || topic?.userUploadedVodUrl) {
    cardbody = (
      <UserUploadedMedia
        videoFile={topic.userUploadedVodUrl}
        imgFile={topic.userUploadedImageUrl}
      />
    )
  } else {
    cardbody = null
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Card {...commonProps} id={id}>
        {cardbody}
      </Card>
    </LexicalComposer>

  )
}

export default TopicItem
