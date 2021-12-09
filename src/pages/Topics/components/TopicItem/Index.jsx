import React, { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
// import EmbededTweet from '../../../CommonComponents/TopicCards/TweetCard/Index'

import EmbededYouTube from '../../../CommonComponents/TopicCards/YouTubeCard/Index'
import ExternalContentCard from '../../../CommonComponents/TopicCards/ExternalContentCard/Index'
import {
  CardItem, CardFrame, CardTitle, CardOverlay, CardContent, CardBody,
} from './Style'

const EmbededTweet = React.lazy(() => import(/* webpackChunkName: "dashboard" */
/* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */ '../../../CommonComponents/TopicCards/TweetCard/Index'
))

const TopicItem = ({ topic, user }) => {
  const navigate = useNavigate()
  console.log(topic.tweetHtml)
  if (topic.ytUrl) return <EmbededYouTube topic={topic} user={user} showLinks={false} src={topic.ytUrl.replace('watch?v=', 'embed/')} />
  if (topic.tweetHtml) {
    return (
      <Suspense fallback={<div> Loading...</div>}>
        <EmbededTweet topic={topic} user={user} showLinks={false} />
      </Suspense>
    )
  }
  if (topic.contentUrl) return <ExternalContentCard topic={topic} user={user} showLinks={false} />

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
