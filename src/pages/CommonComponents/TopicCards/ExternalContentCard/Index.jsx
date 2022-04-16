import React, { useRef } from 'react'

import Card from '../../Card/Index'
// import LinkMetaData from '../../../TopicForm/components/LinkMetaData/Index'
import CardDetails from '../CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToSubTopic from '../../../hooks/routing/useGoToSubTopics'

import { getTimeSince } from '../../../../generic/string/dateFormatter'
import useOpenModal from '../../../hooks/useOpenModalWithLocation'

import LinkMetaData from '../../../TopicForm/components/LinkMetaData/Index'

const ExternalContentCard = ({
  topic, user, showLinks,
}) => {
  const descRef = useRef(null)

  const goToSubTopic = useGoToSubTopic(topic?.id)
  const openModal = useOpenModal('TOPIC_REPLY')
  useSetInnerHtml(descRef, topic?.description)

  return (
    <Card
      onClick={goToSubTopic}
      username={topic?.createdBy}
      iconSrc={`${topic?.createdByIconSrc}`}
      summary={topic?.summary}
      time={getTimeSince(topic?.createdAt)}
    >
      <LinkMetaData topic={topic} />
      <CardDetails
        showLinks={showLinks}
        topic={topic}
        user={user}
      />
    </Card>
  )
}

export default ExternalContentCard
