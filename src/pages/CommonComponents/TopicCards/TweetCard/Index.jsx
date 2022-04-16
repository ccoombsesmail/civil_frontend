import React, {
  useEffect, useRef,
} from 'react'

import Card from '../../Card/Index'
import CardDetails from '../CardDetails/Index'

import useCalculateCardHeightEffect from './hooks/useCalculateCardHeightEffect'
import useGoToSubTopics from '../../../hooks/routing/useGoToSubTopics'

import { getTimeSince } from '../../../../generic/string/dateFormatter'
import { TweetContainer } from './Style'

const EmbededTweet = ({ topic, user, showLinks }) => {
  const tweetRef = useRef(null)

  const goToSubTopic = useGoToSubTopics(topic?.id)

  const height = useCalculateCardHeightEffect(tweetRef, showLinks)

  useEffect(() => {
    if (topic?.tweetHtml) {
      if (tweetRef.current) {
        tweetRef.current.innerHTML = topic?.tweetHtml?.toString() || '<span>Nothing</span>'
      }
    }
  }, [topic?.tweetHtml])

  return (
    <Card
      onClick={goToSubTopic}
      username={topic?.createdBy}
      iconSrc={`${topic?.createdByIconSrc}`}
      tweetRef={tweetRef}
      summary={topic?.summary}
      time={getTimeSince(topic?.createdAt)}
      height={height}
    >
      <TweetContainer height={height} ref={tweetRef}> </TweetContainer>
      <CardDetails
        showLinks={showLinks}
        topic={topic}
        user={user}
      />
    </Card>
  )
}

export default EmbededTweet
