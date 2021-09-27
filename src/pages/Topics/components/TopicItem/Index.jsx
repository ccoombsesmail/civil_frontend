import React from 'react'
import { useHistory } from 'react-router'
import EmbededTweet from '../../../EmbededTweet/Index'

import {
  CardItem, CardFrame, CardTitle, CardOverlay, CardContent, TweetContainer, CardBody
} from './Style'

const TopicItem = ({ topic, user }) => {
  const history = useHistory()

  if (!topic.tweetHtml) return (
    <CardItem
      onClick={() => history.push(`/topics/${topic.id}/subtopics/`)}
    >
      <CardFrame className="card__frame">
        <CardTitle className="card__title">
          {topic.title}
        <CardBody>
          {/* <TweetContainer ref={tweetRef}> </TweetContainer> */}
        </CardBody>
        </CardTitle>
        <CardOverlay className="card__overlay" />
        <CardContent className="card__content">
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
        </CardContent>
      </CardFrame>
    </CardItem>
  )
  return (
    <EmbededTweet topic={topic} user={user} listCard={false} />
  )
}

export default TopicItem
