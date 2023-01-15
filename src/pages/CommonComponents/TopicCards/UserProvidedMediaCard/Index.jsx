import React, { useRef } from 'react'

import Card from '../../TopicCard/Index'
import CardDetails from '../../TopicCard/components/CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToSubTopic from '../../../hooks/routing/useGoToSubTopics'

import DisplayMedia from '../../../Forms/components/DisplayMedia/Index'

const UserProvidedMediaCard = ({
  topic, user, showLinks,
}) => {
  const descRef = useRef(null)

  const goToSubTopic = useGoToSubTopic(topic?.id)

  useSetInnerHtml(descRef, topic?.description)

  return (
    <Card
      onClick={goToSubTopic}
      topic={topic}
    >
      <DisplayMedia
        videoFile={topic.vodUrl}
        imgFile={topic.imageUrl}
        metaData={null}
      />
      <CardDetails
        topic={topic}
        user={user}
        showLinks={showLinks}
      />

    </Card>
  )
}

export default UserProvidedMediaCard
