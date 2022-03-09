import React, { useRef, useEffect, useState } from 'react'
import UserInfoHeader from '../UserInfoHeader/Index'

import {
  Container,
  Body,
  Description,
  VideoDescriptionContainer,
} from './Style'

const Card = ({
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
    <Container ref={ref} height={totalHeight} onClick={onClick} listCard={listCard}>
      <UserInfoHeader iconSrc={iconSrc} time={time} username={username} userId={userId} />
      <Description className="text-pop-up-top">
        &ldquo;
        {summary}
        &rdquo;
      </Description>
      <Body>
        {children}
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
