/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import LinkMetaData from '../../../../../../Forms/components/LinkMetaData/Index'

import { TweetComponent } from '../../../../../../CommonComponents/Lexical/nodes/TweetNode.tsx'
import { Twitter, Web, YouTube } from '../../../../../../../enums/link_type'
import Card from '../../../../../../CommonComponents/SpaceCard/Index'

import { CircleLoading } from '../../../../../../../svgs/spinners/CircleLoading'
import PlaygroundEditorTheme from '../../../../../../CommonComponents/Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../../../../../CommonComponents/Lexical/nodes/PlaygroundNodes.ts'
import UserUploadedMedia from '../../../../../../CommonComponents/SpaceCard/components/UserUploadedMedia/Index'
import { VideoPlayer } from '../../../../../HomePage/components/Spaces/components/SpaceItem/Style'

import { useGetAllDiscussionsQuery } from '../../../../../../../api/services/discussions.ts'
import { DiscussionItemContex } from './DiscussionItemContext.ts'
import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'
import DiscussionActionToolbar from '../../../../../../CommonComponents/ActionToolbars/DiscussionToolbar/Index'
import useGoToCommentThread from '../../../../../../hooks/routing/useGoToCommentThread'

function DiscussionItem({
  discussion, id,
}) {
  const { spaceId } = useParams()
  const initialConfig = {
    editorState: discussion?.editorState,
    namespace: `Civil-${discussion?.title}`,
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    editable: false,
    theme: PlaygroundEditorTheme,
  }

  const goToCommentThread = useGoToCommentThread(spaceId, discussion.id)

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
    cardbody = <LinkMetaData url={discussion?.externalContentData?.externalContentUrl} /> // metaData={metaData.data} isLoading={isLoading}
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
    <LexicalComposer initialConfig={initialConfig}>
      <Card
        {...commonProps}
        id={id}
        CardToolbar={(
          <DiscussionActionToolbar
            discussion={discussion}
          />
      )}
      >
        {cardbody}
      </Card>
    </LexicalComposer>

  )
}

function DiscussionsFeedItem({ index, style }) {
  const { spaceId } = useParams()
  const { data, isLoading, isUninitialized } = useGetAllDiscussionsQuery({ spaceId, currentPage: Math.floor(index / 10)})
  const { currentUser } = useGetCurrentUser()
  let content
  if (isLoading || isUninitialized || !data) {
    content = <CircleLoading size={60} />
  } else {
    const discussion = data[index % 10]
    content = discussion && discussion.title !== 'General' ? (
      <DiscussionItemContex.Provider value={{currentPage: Math.floor(index / 5), spaceId}}>
        <DiscussionItem
          style={style}
          key={discussion.id}
          discussion={discussion}
          user={currentUser}
          currentPage={Math.floor(index / 5)}
        />
      </DiscussionItemContex.Provider>

    ) : null
  }
  return <div style={style}>{content}</div>
}

export default DiscussionsFeedItem
