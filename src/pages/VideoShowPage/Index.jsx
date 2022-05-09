import React, { useState, useRef } from 'react'
import { Collapse } from 'react-bootstrap'
// import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { UpArrowSvg, DownArrowSvg } from '../../svgs/svgs'

import { VideoDescriptionCard } from '../CommonComponents/Card/Index'
import ActionToolbar from '../CommonComponents/ActionToolbars/TopicToolbar/Index'
import LinkSection from '../CommonComponents/LinkSection/Index'
import IconButton from '../CommonComponents/IconButton/Index'

import topicActionCreators from '../../redux/actions/topics'

import useSetInnerHtml from '../hooks/useSetInnerHtml'
import useOpenModal from '../hooks/useOpenModalWithLocation'
import useBindDispatch from '../hooks/redux/useBindDispatch'
import useUpdateLikes from './hooks/useUpdateLikes'
import useGoToSubTopic from '../hooks/routing/useGoToSubTopics'
import { getTimeSince } from '../../generic/string/dateFormatter'

import { VideoPlayer, Description, ExpandButton } from './Style'

const VideoShowPage = ({
  topic, user, src, showLinks,
}) => {
  const descRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useOpenModal('TOPIC_REPLY')
  const goToSubTopic = useGoToSubTopic(topic.id)
  const { updateTopicLikes } = useBindDispatch(topicActionCreators)
  const updateLikes = useUpdateLikes(updateTopicLikes, topic, user)
  useSetInnerHtml(descRef, topic?.description)

  const expandIcon = isOpen ? <UpArrowSvg /> : <DownArrowSvg />

  return (
    <>
      <VideoPlayer src={src} loading="lazy" />
      <VideoDescriptionCard
        onClick={goToSubTopic}
        username={topic?.createdBy}
        iconSrc={`${topic?.createdByIconSrc}`}
        summary={topic?.summary}
        time={getTimeSince(topic?.createdAt)}
      >
        <Description>
          <span ref={descRef} />
        </Description>
        {topic?.evidenceLinks.length !== 0
        && (
        <ExpandButton>
          <IconButton
            icon={expandIcon}
            onClick={() => setIsOpen(!isOpen)}
          >
            Show Additional Info
          </IconButton>
        </ExpandButton>
        )}
        <Collapse in={isOpen}>
          <div>
            <LinkSection topic={topic} showLinks={showLinks} />
          </div>
        </Collapse>
        <ActionToolbar
          likes={topic?.likes}
          topic={topic}
          user={user}
        />
      </VideoDescriptionCard>
    </>
  )
}

export default VideoShowPage
