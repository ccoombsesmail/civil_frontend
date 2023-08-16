/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { BlockUI } from 'primereact/blockui'
import LinkMetaData from '../../../../Forms/components/LinkMetaData/Index'

import { TweetComponent } from '../../../Lexical/nodes/TweetNode.tsx'
import { Twitter, Web, YouTube } from '../../../../../enums/link_type'
import Card from '../../../PostCard/Index'

import { CircleLoading } from '../../../../../svgs/spinners/CircleLoading'
import PlaygroundEditorTheme from '../../../Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../../Lexical/nodes/PlaygroundNodes.ts'
import UserUploadedMedia from '../../../PostCard/components/UserUploadedMedia/Index'

import DiscussionActionToolbar from '../../../ActionToolbars/DiscussionToolbar/Index'
import useGoToCommentThread from '../../../../hooks/routing/useGoToCommentThread'

const VideoPlayer = styled('iframe')`
  /* height: 20vw; */
  width: 100%;
  aspect-ratio: 16 / 9;

`

export function DiscussionItem({
  discussion, id,
}) {
  const [blocked, setBlocked] = useState(discussion.reportStatus === 'UNDER_REVIEW' || discussion.reportStatus === 'MARKED' || discussion.reportStatus === 'REMOVED')
  const initialConfig = {
    editorState: discussion?.title === 'General' ? null : discussion?.editorState,
    namespace: `Civil-${discussion?.title}`,
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    editable: false,
    theme: PlaygroundEditorTheme,
  }

  const goToCommentThread = useGoToCommentThread(discussion.spaceId, discussion.id)

  const commonProps = useMemo(
    () => ({
      space: null,
      discussion,
      showLinks: false,
      hideCommentButton: false,
      onClick: goToCommentThread,
    }),
    [discussion],
  )

  const linkType = discussion?.externalContentData?.linkType

  let cardbody = null

  if (linkType === YouTube) {
    cardbody = (
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
    cardbody = (
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
    cardbody = <LinkMetaData url={discussion?.externalContentData?.externalContentUrl} />
  } else if (discussion?.userUploadedImageUrl || discussion?.userUploadedVodUrl) {
    cardbody = (
      <UserUploadedMedia
        videoFile={discussion.userUploadedVodUrl}
        imgFile={discussion.userUploadedImageUrl}
      />
    )
  } else {
    cardbody = null
  }

  return (
    <LexicalComposer className="relative" initialConfig={initialConfig}>

      <BlockUI blocked={blocked}>
        <Card
          {...commonProps}
          id={id}
          setBlocked={setBlocked}
          CardToolbar={(
            <DiscussionActionToolbar
              discussion={discussion}
            />
      )}
        >
          {cardbody}
        </Card>

      </BlockUI>

    </LexicalComposer>

  )
}
