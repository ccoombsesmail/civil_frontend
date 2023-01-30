/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import useGetCurrentUser from '../../../../../../../App/hooks/useGetCurrentUser'
import { useGetLinkMetaDataQuery } from '../../../../../../../../api/services/links.ts'
import { useGetDiscussionQuery } from '../../../../../../../../api/services/discussions.ts'
import { CircleLoading } from '../../../../../../../../svgs/spinners/CircleLoading'
import { Twitter, Web, YouTube } from '../../../../../../../../enums/link_type'
import { VideoPlayer } from '../../../../../HomePage/components/Topics/components/TopicItem/Style'
import Card from '../../../../../../../CommonComponents/TopicCard/Index'
import { TweetComponent } from '../../../../../../../CommonComponents/Lexical/nodes/TweetNode.tsx'
import PlaygroundEditorTheme from '../../../../../../../CommonComponents/Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../../../../../../CommonComponents/Lexical/nodes/PlaygroundNodes.ts'
import UserProvidedMediaCard from '../../../../../../../CommonComponents/TopicCards/UserProvidedMediaCard/Index'
import LinkMetaData from '../../../../../../../Forms/components/LinkMetaData/Index'
import { uuidRegEx } from '../../../../../../../../generic/regex/uuid'
import LineWithOverlayText from '../../../LineWithTextOverlay/Index'

const DiscussionCard = () => {
  const { pathname } = useLocation()
  const discussionId = pathname.match(uuidRegEx)?.[1]
  const { currentUser } = useGetCurrentUser()
  const { data: discussion, isLoading: isDiscussionLoading, isUninitialized: isDiscussionUninitialized } = useGetDiscussionQuery(discussionId, {
    skip: !currentUser || !discussionId,
  })

  const commonProps = useMemo(() => ({
    topic: null, user: currentUser, showLinks: true, discussion,
  }), [discussion, currentUser])

  const linkType = discussion?.externalContentData?.linkType
  const { data: metaData, isLoading } = useGetLinkMetaDataQuery(discussion?.externalContentData?.externalContentUrl, {
    skip: linkType !== Web,
  })

  if (isDiscussionUninitialized || discussion?.title === 'General') return null
  if (isDiscussionLoading) return <CircleLoading size={40} />

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
    content = isDiscussionLoading ? <CircleLoading size={40} /> : <LinkMetaData metaData={metaData} isLoading={isLoading} />
  } else if (discussion?.createdByVodUrl || discussion?.createdByImageUrl) {
    content = <UserProvidedMediaCard {...commonProps} />
  } else {
    return null
  }

  const initialConfig = {
    editorState: discussion?.description,
    namespace: 'Civil-Discussion-Card',
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    editable: false,
    theme: PlaygroundEditorTheme,
  }

  return (
    <>
      <LineWithOverlayText>
        Discussion
      </LineWithOverlayText>

      <LexicalComposer initialConfig={initialConfig}>
        <Card {...commonProps}>
          {content}
        </Card>
      </LexicalComposer>
    </>

  )
}

export default DiscussionCard
