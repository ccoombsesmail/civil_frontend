/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import LinkMetaData from '../../../../../../Forms/components/LinkMetaData/Index'
import { VideoPlayer } from './Style'
import { TweetComponent } from '../../../../../../CommonComponents/Lexical/nodes/TweetNode.tsx'
import UserProvidedMediaCard from '../../../../../../CommonComponents/TopicCards/UserProvidedMediaCard/Index'
import { Twitter, Web, YouTube } from '../../../../../../../enums/link_type'
import Card from '../../../../../../CommonComponents/TopicCard/Index'

import { CircleLoading } from '../../../../../../../svgs/spinners/CircleLoading'
import useGoToDiscussions from '../../../../../../hooks/routing/useGoToDiscussions'
import PlaygroundEditorTheme from '../../../../../../CommonComponents/Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../../../../../CommonComponents/Lexical/nodes/PlaygroundNodes.ts'
import { useGetLinkMetaDataQuery } from '../../../../../../../api/services/links.ts'

function TopicItem({ topic, user, hideCommentButton }) {
  const goToDiscussion = useGoToDiscussions(topic.id)
  const initialConfig = {
    editorState: JSON.parse(topic.description),
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
    }),
    [topic, user],
  )

  const linkType = topic.externalContentData?.linkType
  const { data: metaData, isLoading } = useGetLinkMetaDataQuery(topic.externalContentData?.externalContentUrl, {
    skip: linkType !== Web,
  })

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
    cardbody = isLoading ? <CircleLoading size={40} /> : <LinkMetaData metaData={metaData} isLoading={isLoading} />
  } else if (topic?.createdByVodUrl || topic?.createdByImageUrl) {
    cardbody = <UserProvidedMediaCard {...commonProps} />
  } else {
    cardbody = null
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Card {...commonProps}>
        {cardbody}
      </Card>
    </LexicalComposer>

  )
}

export default TopicItem
