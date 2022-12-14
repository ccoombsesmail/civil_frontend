/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import EmbededTweet from '../../../../../../../CommonComponents/TopicCards/TweetCard/Index'

import EmbededYouTube from '../../../../../../../CommonComponents/TopicCards/YouTubeCard/Index'
import ExternalContentCard from '../../../../../../../CommonComponents/TopicCards/ExternalContentCard/Index'
import {
  CardItem, CardFrame, CardTitle, CardOverlay, CardContent, CardBody,
} from './Style'
import UserProvidedMediaCard from '../../../../../../../CommonComponents/TopicCards/UserProvidedMediaCard/Index'
// import useGoToSubTopics from '../../../hooks/routing/useGoToSubTopics'

const TopicItem = ({ topic, user }) => {
  const navigate = useNavigate()
  const commonProps = useMemo(() => ({
    topic, user, showLinks: false, hideReplyIcon: true,
  }), [topic, user])
  // const goToSubTopic = useGoToSubTopics(topic?.id)
  if (topic.ytUrl) {
    return (
      <EmbededYouTube
        {...commonProps}
        src={topic.ytUrl.replace('watch?v=', 'embed/')}
      />
    )
  }
  if (topic.tweetHtml) {
    return (
      <EmbededTweet
        {...commonProps}
      />
    )
  }
  if (topic.externalContentUrl) {
    return (
      <ExternalContentCard
        {...commonProps}
      />
    )
  }
  if (topic.createdByVodUrl || topic.createdByImageUrl) {
    return (
      <UserProvidedMediaCard
        {...commonProps}
      />
    )
  }

  return (
    <CardItem
      onClick={() => navigate(`/topics/${topic.id}/subtopics/`)}
    >
      <CardFrame className="card__frame">
        <CardTitle className="card__title">
          {topic.title}
          <CardBody />
        </CardTitle>
        <CardOverlay className="card__overlay" />
        <CardContent className="card__content">
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
        </CardContent>
      </CardFrame>
    </CardItem>
  )
}

export default TopicItem
