/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { memo, useContext } from 'react'
import { Card } from 'primereact/card'
import { useParams } from 'react-router-dom'
import { Button } from 'primereact/button'
import useGetCurrentUser from '../../../App/hooks/useGetCurrentUser'
import CardLoader from '../../CardLoader/CardLoader'
import { truncateAtIndex } from '../../../../generic/string/truncateAtIndex'
import useGoToUserProfileHook from '../../../hooks/routing/useGoToUserProfile'
import { longUsernameDisplay } from '../../../../generic/string/longUsernameDisplay'
import UserIcon from '../../UserIcon/Index'
import useGoToCommentThread from '../../../hooks/routing/useGoToCommentThread'
import { useGetAllSpaceDiscussionsQuery } from '../../../../api/services/discussions.ts'

import { ColumnNumberContext } from '../InfiniteGridLoader'
import { getTimeSince } from '../../../../generic/string/dateFormatter'

import { DiscussionItemContext } from '../ContentItems/DiscussionItem/DiscussionItemContext.tsx'
import './GridItem.css'
import { Twitter, Web, YouTube } from '../../../../enums/link_type'
import OgImg from '../../LinkMetaData/OgImg'

function DiscussionGridItem({ discussion }) {
  const {
    createdByUserId, createdByUsername, createdByTag, title, createdByIconSrc,
  } = discussion

  const goToUserProfile = useGoToUserProfileHook(createdByUserId)
  const goToDiscussion = useGoToCommentThread(discussion.spaceId, discussion.id)
  const formattedUsername = longUsernameDisplay(createdByUsername)
  const formattedTag = longUsernameDisplay(createdByTag)

  const subTitle = (
    <>
      <div className="flex w-full relative mb-4">
        <UserIcon userId={createdByUserId} iconSrc={createdByIconSrc} size="3vw" />
        <div>
          <div className="flex flex-column align-items-start w-full ml-2">
            <h4 className="text-sm text-500">{formattedUsername}</h4>
            <h5 className="text-sm tag text-500 " onClick={goToUserProfile} onKeyPress={goToUserProfile}>
              {`@${formattedTag || formattedUsername}`}
            </h5>

          </div>

        </div>
      </div>
      <div className="space-meta-data text-sm w-full">
        <span>
          {discussion.commentCount || 0}
          {' '}
          comments
        </span>
        <time className="space-card-time">
          {getTimeSince(discussion.createdAt)}
        </time>
      </div>

    </>
  )

  let headerContent

  if (discussion.externalContentData) {
    const {
      linkType, externalContentUrl, thumbImgUrl, embedId,
    } = discussion.externalContentData

    switch (linkType) {
      case YouTube:
      // Use embedId or externalContentUrl to embed the YouTube video
        headerContent = (
          <img
            alt="youtube video thumbnail"
            onClick={goToDiscussion}
            className="grid-item-header"
            title={title}
            src={`https://img.youtube.com/vi/${embedId}/hqdefault.jpg
        `}
          />
        )
        break
      case Twitter:
      // Embed the tweet or use thumbImgUrl for thumbnail
        headerContent = <img className="grid-item-header" src={thumbImgUrl} alt="Twitter content thumbnail" />
        break
      case Web:
      // Fetch meta tags from the website or use thumbImgUrl for
        headerContent = <OgImg className="grid-item-header" url={externalContentUrl} />
        break
      default:
        headerContent = null
    }
  } else if (discussion.userUploadedImageUrl) {
    headerContent = <img className="grid-item-header" src={discussion.userUploadedImageUrl} alt="Uploaded image" />
  } else if (discussion.userUploadedVodUrl) {
    headerContent = <video className="grid-item-header" src={discussion.userUploadedVodUrl} controls />
  } else {
    headerContent = (
      <div>
        <b>General Discussion</b>
      </div>
    )
  }

  const header = (
    <Button text className="thumbnail-container" type="button" onClick={goToDiscussion}>
      {headerContent}
    </Button>
  )
  return (
    <Card
      className="m-2"
      title={truncateAtIndex(title, 20)}
      subTitle={subTitle}
      header={header}
    />
  )
}

function DiscussionTableFeedGridItem({ columnIndex, rowIndex, style }) {
  const { colNumber } = useContext(ColumnNumberContext)
  const idx = rowIndex * colNumber + columnIndex
  const currentPage = Math.floor(idx / 5)
  const { spaceId } = useParams()

  const { data, isLoading, isUninitialized } = useGetAllSpaceDiscussionsQuery({ spaceId, currentPage })
  const { currentUser } = useGetCurrentUser()
  let content
  if (isLoading || isUninitialized || !data) {
    content = <CardLoader />
  } else {
    const discussion = data[idx % 5]
    content = discussion ? (
      <DiscussionItemContext.Provider value={{ currentPage }}>
        <DiscussionGridItem
          style={style}
          key={discussion.id}
          discussion={discussion}
          user={currentUser}
          currentPage={Math.floor(idx / 5)}

        />
      </DiscussionItemContext.Provider>

    ) : null
  }
  return <div style={style}>{content}</div>
}

export default memo(DiscussionTableFeedGridItem)
