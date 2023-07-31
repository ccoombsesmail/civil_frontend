/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'
import { CircleLoading } from '../../../../../../../svgs/spinners/CircleLoading'
import { Twitter, Web, YouTube } from '../../../../../../../enums/link_type'
import { VideoPlayer } from '../../../../../HomePage/components/Spaces/components/SpaceItem/Style'
import Card from '../../../../../../CommonComponents/PostCard/Index'
import { TweetComponent } from '../../../../../../CommonComponents/Lexical/nodes/TweetNode.tsx'
import UserProvidedMediaCard from '../../../../../../CommonComponents/SpaceCards/UserProvidedMediaCard/Index'
import LinkMetaData from '../../../../../../Forms/components/LinkMetaData/Index'
import { uuidRegEx } from '../../../../../../../generic/regex/uuid'
import LineWithOverlayText from '../../../LineWithTextOverlay/Index'
import UserUploadedMedia from '../../../../../../CommonComponents/PostCard/components/UserUploadedMedia/Index'
import useInitLexicalConfig from '../../../../../../hooks/lexical/useInitLexicalConfig'
import DiscussionActionToolbar from '../../../../../../CommonComponents/ActionToolbars/DiscussionToolbar/Index'

function DiscussionCard({ discussion, isDiscussionLoading, isDiscussionUninitialized }) {
  const { pathname } = useLocation()
  const discussionId = pathname.match(uuidRegEx)?.[1]
  const { currentUser } = useGetCurrentUser()
  const [editorState, setEditorState] = useState(discussion.editorState)

  const commonProps = useMemo(() => ({
    space: null, user: currentUser, showLinks: true, discussion,
  }), [discussion, currentUser])

  const linkType = discussion.externalContentData?.linkType

  useEffect(() => {
    setEditorState(discussion.editorState)

    return () => {
      setEditorState(null)
    }
  }, [editorState, discussion])

  const initLexicalConfig = useInitLexicalConfig(editorState, `Civil-Discussion-Card-${discussionId}`, false, discussion)

  if (editorState !== discussion.editorState) return null
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
    content = <LinkMetaData url={discussion?.externalContentData?.externalContentUrl} />
  } else if (discussion?.createdByVodUrl || discussion?.createdByImageUrl) {
    content = <UserProvidedMediaCard {...commonProps} />
  } else {
    content = (
      <UserUploadedMedia
        videoFile={discussion.userUploadedVodUrl}
        imgFile={discussion.userUploadedImageUrl}
      />
    )
  }

  return (
    <>
      <LineWithOverlayText>
        Discussion
      </LineWithOverlayText>

      <LexicalComposer initialConfig={{...initLexicalConfig}}>
        <Card
          {...commonProps}
          CardToolbar={(
            <DiscussionActionToolbar
              discussion={discussion}
              updateGetDiscussionQuery
            />
        )}
        >
          {content}
        </Card>
      </LexicalComposer>
    </>

  )
}

export default DiscussionCard
