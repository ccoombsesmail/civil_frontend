import React, { useRef } from 'react'

import Card from '../../Card/Index'
import CardDetails from '../CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToSubTopic from '../../../hooks/routing/useGoToSubTopics'
import useUpdateLikes from '../../ActionToolbars/TopicToolbar/components/LikeButton/hooks/useUpdateLikes'

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
      userId={topic?.userId}
      topicId={topic?.id}
      iconSrc={`${topic?.createdByIconSrc}`}
      summary={topic?.summary}
      time={getTimeSince(topic?.createdAt)}
      reportStatus={topic?.reportStatus}
    >
      <VideoPlayer src={src} loading="lazy" />
      <CardDetails
        topic={topic}
        user={user}
        updateLikes={updateLikes}
        showLinks={showLinks}
      />

    </Card>
  )
}

export default EmbededYouTube
