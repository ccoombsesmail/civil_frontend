/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import LinkMetaData from '../../../../../../Forms/components/LinkMetaData/Index'
import { VideoPlayer } from './Style'
import { TweetComponent } from '../../../../../../CommonComponents/Lexical/nodes/TweetNode.tsx'
import { Twitter, Web, YouTube } from '../../../../../../../enums/link_type'
import Card from '../../../../../../CommonComponents/SpaceCard/Index'

import { CircleLoading } from '../../../../../../../svgs/spinners/CircleLoading'
import useGoToDiscussions from '../../../../../../hooks/routing/useGoToDiscussions'
import PlaygroundEditorTheme from '../../../../../../CommonComponents/Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../../../../../CommonComponents/Lexical/nodes/PlaygroundNodes.ts'
import UserUploadedMedia from '../../../../../../CommonComponents/SpaceCard/components/UserUploadedMedia/Index'
import SpaceActionToolbar from '../../../../../../CommonComponents/ActionToolbars/SpaceToolbar/Index'

function SpaceItem({
  space, user, hideCommentButton, id, currentPage,
}) {
  const goToDiscussion = useGoToDiscussions(space.id)
  const initialConfig = {
    editorState: space?.editorState,
    namespace: `Civil-${space.title}`,
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    editable: false,
    theme: PlaygroundEditorTheme,
  }

  const commonProps = useMemo(
    () => ({
      space,
      user,
      showLinks: Boolean(space.referenceLinks),
      hideCommentButton,
      onClick: goToDiscussion,
      currentPage,
    }),
    [space, user, currentPage],
  )

  const linkType = space.externalContentData?.linkType

  let cardbody = null

  if (linkType === YouTube) {
    cardbody = (
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
    cardbody = (
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
    cardbody = <LinkMetaData url={space?.externalContentData?.externalContentUrl} /> // metaData={metaData.data} isLoading={isLoading}
  } else if (space?.userUploadedImageUrl || space?.userUploadedVodUrl) {
    cardbody = (
      <UserUploadedMedia
        videoFile={space.userUploadedVodUrl}
        imgFile={space.userUploadedImageUrl}
      />
    )
  } else {
    cardbody = null
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Card
        {...commonProps}
        id={id}
        CardToolbar={(
          <SpaceActionToolbar
            space={space}
            hideCommentButton
          />
    )}
      >
        {cardbody}
      </Card>
    </LexicalComposer>

  )
}

export default SpaceItem
