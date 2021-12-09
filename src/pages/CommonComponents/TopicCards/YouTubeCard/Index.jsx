import React, { useRef } from 'react'

import Card from '../../Card/Index'
import CardDetails from '../CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToSubTopic from '../../../hooks/useGoToSubTopics'
import useUpdateLikes from '../../../hooks/useUpdateLikes'

import { getTimeSince } from '../../../../generic/string/dateFormatter'
import { VideoPlayer } from './Style'

const EmbededYouTube = ({
  topic, user, src, showLinks,
}) => {
  const descRef = useRef(null)

  const goToSubTopic = useGoToSubTopic(topic?.id)
  const updateLikes = useUpdateLikes(topic, user)

  useSetInnerHtml(descRef, topic?.description)

  return (
    <Card
      onClick={goToSubTopic}
      username={topic?.createdBy}
      iconSrc={`${topic?.createdByIconSrc}`}
      summary={topic?.summary}
      time={getTimeSince(topic?.createdAt)}
    >
      <VideoPlayer src={src} loading="lazy" />
      <CardDetails topic={topic} user={user} updateLikes={updateLikes} showLinks={showLinks} />

    </Card>
  )
}

export default EmbededYouTube
