import React, { useRef } from 'react'

import Card from '../../Card/Index'
import CardDetails from '../CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToSubTopic from '../../../hooks/routing/useGoToSubTopics'

import { VideoPlayer } from './Style'

const EmbededYouTube = ({
  topic, user, src, showLinks,
}) => {
  const descRef = useRef(null)
  const goToSubTopic = useGoToSubTopic(topic?.id)

  useSetInnerHtml(descRef, topic?.description)
  return (
    <Card
      onClick={goToSubTopic}
      topic={topic}
    >
      <VideoPlayer src={src} loading="lazy" />
      <CardDetails
        topic={topic}
        user={user}
        showLinks={showLinks}
      />

    </Card>
  )
}

export default EmbededYouTube
