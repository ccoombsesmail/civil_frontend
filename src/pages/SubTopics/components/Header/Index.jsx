/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

import EmbededTweet from '../../../CommonComponents/TopicCards/TweetCard/Index'
import VideoShowPage from '../../../VideoShowPage/Index'
import ExternalContentCard from '../../../CommonComponents/TopicCards/ExternalContentCard/Index'
import UserProvidedMediaCard from '../../../CommonComponents/TopicCards/UserProvidedMediaCard/Index'
import UserInfoHeader from '../../../CommonComponents/UserInfoHeader/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'

import { getTimeSince } from '../../../../generic/string/dateFormatter'

import {
  Container, Description, TopicSummaryContainer, StyledLongDownArrow,
} from './Style/index'
import { uuidRegEx } from '../../../../generic/regex/uuid'

const TooltipComponent = ({ text, title, reference }) => (
  <OverlayTrigger
    placement="top"
    overlay={(
      <Tooltip>
        <strong>{title}</strong>
      </Tooltip>
      )}
  >
    <span onClick={() => reference?.current?.scrollIntoView()}>{text}</span>
  </OverlayTrigger>
)

const Header = ({ topic, user }) => {
  let content = null
  let subtopicContent = null
  const { '*': url } = useParams()
  const [subtopicId, commentId] = url ? url.match(uuidRegEx) : []

  const subtopic = useSelector((s) => s.subtopics)[subtopicId]
  const showSubTopic = subtopic && subtopic?.title !== 'General'

  const commonProps = useMemo(() => ({
    topic, user, showLinks: true,
  }), [topic, user])

  const descRef = useRef(null)
  const subtopicRef = useRef(null)
  const topicRef = useRef(null)

  useSetInnerHtml(descRef, topic?.description)

  const commonPropsSubTopic = useMemo(() => ({
    topic: subtopic, user, showLinks: true,
  }), [subtopic, user])

  if (topic?.tweetHtml) content = <EmbededTweet {...commonProps} />
  else if (topic?.ytUrl) content = <VideoShowPage {...commonProps} src={topic.ytUrl.replace('watch?v=', 'embed/')} />
  else if (topic?.vodUrl || topic?.imageUrl) content = <UserProvidedMediaCard {...commonProps} />
  else content = <ExternalContentCard {...commonProps} />
  if (subtopic) {
    if (subtopic?.tweetHtml) subtopicContent = <EmbededTweet {...commonPropsSubTopic} />
    else if (subtopic?.ytUrl) subtopicContent = <VideoShowPage {...commonPropsSubTopic} src={subtopic.ytUrl.replace('watch?v=', 'embed/')} />
    else if (subtopic?.vodUrl || subtopic?.imageUrl) {
      subtopicContent = <UserProvidedMediaCard {...commonPropsSubTopic} />
    } else subtopicContent = <ExternalContentCard {...commonPropsSubTopic} />
  }

  return (
    <Container>
      <h1 className="text-focus-in">
        {' '}
        {
          showSubTopic ? (
            <>
              Discussion Related To Parent
              {' '}
              <TooltipComponent text="Topic" title={topic?.title} reference={topicRef} />
            </>
          ) : (
            <>
              {'We\'re Talking About This'}
              {' '}
              <TooltipComponent text="Topic" title={topic?.title} reference={topicRef} />
            </>
          )
        }
      </h1>

      <div ref={topicRef} style={{ width: '90%' }}>
        {!showSubTopic && content }
        <TopicSummaryContainer hidden={!showSubTopic}>
          <UserInfoHeader
            iconSrc={topic?.createdByIconSrc}
            time={getTimeSince(topic?.createdAt)}
            username={topic?.createdBy}
            userId={topic?.userId}
          />
          <img src={topic?.thumbImgUrl} alt="Nothing To Show" />
          <Description>
            <span ref={descRef} />
          </Description>
        </TopicSummaryContainer>
      </div>
      { subtopic && <StyledLongDownArrow hidden={!showSubTopic} /> }
      <h1 className="text-focus-in" hidden={!showSubTopic}>
        {' '}
        {'We\'re Talking About This'}
        {' '}
        <TooltipComponent text="Subtopic" title={subtopic?.title} reference={subtopicRef} />
      </h1>
      <div hidden={!showSubTopic} ref={subtopicRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {subtopicContent}
      </div>
    </Container>

  )
}

export default Header
