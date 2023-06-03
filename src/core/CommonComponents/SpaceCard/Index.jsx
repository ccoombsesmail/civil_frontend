import React, {
  useRef, useEffect, useState, useMemo, forwardRef,
} from 'react'
import { useLocation } from 'react-router-dom'
import { UNDER_REVIEW } from '../../../enums/report_status'
import UserInfoHeader from '../UserInfoHeader/Index'
import CensorOverlay from '../CensorOverlay/Index'
import { getTimeSince } from '../../../generic/string/dateFormatter'
import { Card } from 'primereact/card'

import {
  Container,
  Body,
  Description,
  VideoDescriptionContainer,
} from './Style'
import { SPACE } from '../../../enums/content_type'
import CardDetails from './components/CardDetails/Index'
import { Title } from '../UserInfoHeader/Style'

function PostCard({
  children,
  onClick,
  listCard,
  space,
  discussion,
  user,
  showLinks,
  hideCommentButton,
  currentPage,
}) {
  const { pathname } = useLocation()
  const {
    id, createdAt, createdByIconSrc, createdByUsername, createdByUserId, createdByTag, spaceCreatorIsDidUser, userVerificationType, reportStatus, title, category,
  } = space || discussion || {}
  const [shouldBlur, setShouldBlur] = useState(reportStatus === UNDER_REVIEW)
  const onContainerClick = useMemo(() => (shouldBlur ? () => null : onClick), [shouldBlur])

  return (
    <Container
      onClick={onContainerClick}
      listCard={listCard}
      shouldBlur={shouldBlur}
    >
      <UserInfoHeader
        iconSrc={createdByIconSrc}
        time={getTimeSince(createdAt)}
        username={createdByUsername}
        userId={createdByUserId}
        userTag={createdByTag}
        spaceCreatorIsDidUser={spaceCreatorIsDidUser}
        userVerificationType={userVerificationType}
        space={space}
        category={category}
      />
      { shouldBlur && (
      <CensorOverlay
        setShouldBlur={setShouldBlur}
        contentId={id}
        contentType={SPACE}
        showNavigationToTribunal={reportStatus === UNDER_REVIEW && !pathname.includes('tribunal')}
      />
      )}
      <Body shouldBlur={shouldBlur}>
        <Title>
          {title}
        </Title>
        {children}
        <CardDetails
          space={space}
          discussion={discussion}
          user={user}
          showLinks={showLinks}
          hideCommentButton={hideCommentButton}
          currentPage={currentPage}
        />
      </Body>
    </Container>
  )
}

export default PostCard
