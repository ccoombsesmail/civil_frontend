import React from 'react'
import { useHistory } from 'react-router'
import EmbededTweet from '../../../EmbededTweet/Index'
import EmbededYouTube from '../../../EmbededYouTube/Index'
import {
  CardItem, CardFrame, CardTitle, CardOverlay, CardContent, CardBody,
} from './Style'

const TopicItem = ({ topic, user }) => {
  const history = useHistory()

  if (topic.ytUrl) return <EmbededYouTube topic={topic} user={user} showLinks={false} src={topic.ytUrl.replace('watch?v=', 'embed/')} />
  if (topic.tweetHtml) return <EmbededTweet topic={topic} user={user} showLinks={false} />

  return (
    <CardItem
      onClick={() => history.push(`/topics/${topic.id}/subtopics/`)}
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
