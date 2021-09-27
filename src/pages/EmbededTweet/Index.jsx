import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router'
import { getTimeSince } from '../../generic/string/dateFormatter'
import Card from '../CommonComponents/Card/Index'

import { TweetContainer } from './Style'

const EmbededTweet = ({ topic, user, listCard }) => {
  const tweetRef = useRef(null)
  const history = useHistory()
  useEffect(() => {
    if (topic?.tweetHtml) {
      if (tweetRef.current) {
        tweetRef.current.innerHTML = topic?.tweetHtml?.toString() || "<span>Nothing</span>"
         window.twttr.widgets?.load(tweetRef.current)
      }
    }
  }, [topic])
   return (
    <Card
      onClick={() => history.push(`/topics/${topic?.id}/subtopics/`)}
      username={topic?.createdBy}
      iconSrc={`${user?.iconSrc}`}
      tweetRef={tweetRef}
      description={topic?.description}
      time={getTimeSince(topic?.createdAt)}
      listCard={listCard}
    > 
      <TweetContainer ref={tweetRef}> </TweetContainer>
    </Card>
  )

}

export default EmbededTweet