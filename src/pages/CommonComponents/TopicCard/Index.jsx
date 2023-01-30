import React, {
  useRef, useEffect, useState, useMemo,
} from 'react'
import { useLocation } from 'react-router-dom'
import { UNDER_REVIEW } from '../../../enums/report_status'
import UserInfoHeader from '../UserInfoHeader/Index'
import CensorOverlay from '../CensorOverlay/Index'
import { getTimeSince } from '../../../generic/string/dateFormatter'

import {
  Container,
  Body,
  Description,
  VideoDescriptionContainer,
} from './Style'
import { TOPIC } from '../../../enums/content_type'
import CardDetails from './components/CardDetails/Index'

const Card = ({
  children,
  onClick,
  listCard,
  topic,
  discussion,
  user,
  showLinks,
  hideCommentButton,
}) => {
  const { pathname } = useLocation()
  const {
    id, createdAt, createdByIconSrc, createdByUsername, createdByUserId, createdByTag, topicCreatorIsDidUser, userVerificationType, reportStatus,
  } = topic || discussion || {}
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
        topicCreatorIsDidUser={topicCreatorIsDidUser}
        userVerificationType={userVerificationType}
      />
      { shouldBlur && (
      <CensorOverlay
        setShouldBlur={setShouldBlur}
        contentId={id}
        contentType={TOPIC}
        showNavigationToTribunal={reportStatus === UNDER_REVIEW && !pathname.includes('tribunal')}
      />
      )}
      <Body shouldBlur={shouldBlur}>
        {children}
        <CardDetails
          topic={topic}
          discussion={discussion}
          user={user}
          showLinks={showLinks}
          hideCommentButton={hideCommentButton}
        />
      </Body>
    </Container>
  )
}

export const VideoDescriptionCard = ({
  children,
  summary,
  iconSrc,
  username,
  time,
  onClick,
  listCard,
  height,
  userId,
}) => {
  const ref = useRef(null)
  const [totalHeight, setTotalHeight] = useState('unset')
  useEffect(() => {
    const totalCompHeight = [...ref?.current?.children].reduce((acc, child) => {
      const compStyles = window.getComputedStyle(child)
      const heightComp = compStyles.getPropertyValue('height')
      return acc + Number(heightComp.slice(0, heightComp.length - 2))
    }, 0)
    if (height) setTotalHeight(totalCompHeight + height)
  }, [ref])

  return (
    <VideoDescriptionContainer ref={ref} height={totalHeight} onClick={onClick} listCard={listCard}>
      <UserInfoHeader iconSrc={iconSrc} time={time} username={username} userId={userId} />
      <Description className="text-pop-up-top">
        &ldquo;
        {summary}
        &rdquo;
      </Description>
      <Body>
        {children}
      </Body>
    </VideoDescriptionContainer>
  )
}

export default Card
