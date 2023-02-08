import React, { useRef } from 'react'

import Card from '../../TopicCard/Index'
import CardDetails from '../../TopicCard/components/CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToDiscussion from '../../../hooks/routing/useGoToDiscussions'

import DisplayMedia from '../../../Forms/components/DisplayMedia/Index'

function UserProvidedMediaCard({
  topic, user, showLinks,
}) {
  const descRef = useRef(null)

  const goToDiscussion = useGoToDiscussion(topic?.id)

  useSetInnerHtml(descRef, topic?.description)

  return (
    <Card
      onClick={goToDiscussion}
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
