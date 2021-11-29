import React, { useRef } from 'react'

import Card from '../../Card/Index'
import LinkMetaData from '../../../TopicForm/components/LinkMetaData/Index'
import CardDetails from '../CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToSubTopic from '../../../hooks/useGoToSubTopics'
import useUpdateLikes from '../../../hooks/useUpdateLikes'

import { getTimeSince } from '../../../../generic/string/dateFormatter'
import useGetLinkMetaDataEffect from './hooks/useGetLinkMetaDataEffect'
import useOpenModal from '../../../hooks/useOpenModalWithLocation'

const ExternalContentCard = ({
  topic, user, showLinks,
}) => {
  const descRef = useRef(null)

  const metaData = useGetLinkMetaDataEffect(topic)
  const goToSubTopic = useGoToSubTopic(topic?.id)
  const updateLikes = useUpdateLikes(topic, user)
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
      { metaData && <LinkMetaData metaData={metaData} />}
      <CardDetails
        showLinks={showLinks}
        topic={topic}
        user={user}
        onCommentClick={openModal}
        updateLikes={updateLikes}
      />
    </Card>
  )
}

export default ExternalContentCard
