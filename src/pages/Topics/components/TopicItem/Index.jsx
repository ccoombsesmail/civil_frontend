import React, { useEffect, useRef } from 'react'
import { GiCardJackSpades } from 'react-icons/gi'
import { useHistory } from 'react-router'
import Card from '../../../CommonComponents/Card/Index'
import {
  CardItem, CardFrame, CardTitle, CardOverlay, CardContent, TweetContainer, CardBody
} from './Style'

const TopicItem = ({ topic, user }) => {
  const tweetRef = useRef(null)
  const history = useHistory()
  useEffect(() => {
    if (topic.tweetHtml) {
      if (tweetRef.current) {
        tweetRef.current.innerHTML = topic.tweetHtml?.toString() || "<span>Nothing</span>"
         window.twttr.widgets?.load(tweetRef.current)
      }
    }
  }, [topic])

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
    <Card
      username={user?.username}
      iconSrc="https://i.imgur.com/7D7I6dI.png"
      time="3m"
      tweetRef={tweetRef}
      description={topic.description}
    > 
      <TweetContainer ref={tweetRef}> </TweetContainer>
    </Card>
  )
}

export default TopicItem
