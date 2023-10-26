/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { memo, useContext } from 'react'
import { Card } from 'primereact/card'
import { useGetAllSpacesQuery } from '../../../../../../../../../api/services/spaces.ts'
import { SpaceItemContext } from '../../../../../Spaces/components/SpaceItem/SpaceItemContex.tsx'
import useGetCurrentUser from '../../../../../../../../App/hooks/useGetCurrentUser'
import CardLoader from '../../../../../../../../CommonComponents/CardLoader/CardLoader'
import { truncateAtIndex } from '../../../../../../../../../generic/string/truncateAtIndex'
import useGoToUserProfile from '../../../../../../../../hooks/routing/useGoToUserProfile'
import { longUsernameDisplay } from '../../../../../../../../../generic/string/longUsernameDisplay'
import UserIcon from '../../../../../../../../CommonComponents/UserIcon/Index'
import useGoToDiscussions from '../../../../../../../../hooks/routing/useGoToDiscussions'

import './TrendingSpaceItem.css'
import { ColumnNumberContext } from '../../../../../../../../CommonComponents/InfiniteLoaders/InfiniteGridLoader'
import { getTimeSince } from '../../../../../../../../../generic/string/dateFormatter'

function GridItem({ space }) {
  const {
    createdByUserData, title, userUploadedImageUrl,
  } = space

  const { createdByUserId, createdByUsername, createdByTag,createdByIconSrc } = createdByUserData
  const goToUserProfile = useGoToUserProfile(createdByUserId)
  const goToDiscussion = useGoToDiscussions(space.id)
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
          {space.discussionCount}
          {' '}
          discussions
        </span>
        <span className="mx-2">
          •
        </span>
        <span>
          {space.commentCount}
          {' '}
          comments
        </span>
        <time className="space-card-time">
          {getTimeSince(space.createdAt)}
        </time>
      </div>

    </>
  )

  const imgSrc = userUploadedImageUrl
  || 'https://thumbs.dreamstime.com/b/web-photo-simple-icon-image-thumbnail-sign-vector-web-photo-simple-icon-image-thumbnail-sign-picture-album-placeholder-symbol-219679852.jpg'

  const header = (
    <div className="thumbnail-container">
      <img className="space-header-header-img" onClick={goToDiscussion} src={imgSrc} alt="Thumbnail Description" />

    </div>

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

function TrendingSpaceItem({ columnIndex, rowIndex, style }) {
  const { colNumber } = useContext(ColumnNumberContext)
  const idx = rowIndex * colNumber + columnIndex
  const { data, isLoading, isUninitialized } = useGetAllSpacesQuery(Math.floor(idx / 5))
  const { currentUser } = useGetCurrentUser()
  let content
  if (isLoading || isUninitialized || !data) {
    content = <CardLoader />
  } else {
    const space = data[idx % 5]
    content = space ? (
      <SpaceItemContext.Provider value={{currentPage: Math.floor(idx / 5)}}>
        <GridItem
          style={style}
          key={space.id}
          space={space}
          user={currentUser}
          currentPage={Math.floor(idx / 5)}

        />
      </SpaceItemContext.Provider>

    ) : null
  }
  return <div style={style}>{content}</div>
}

export default memo(TrendingSpaceItem)
