import React, { useRef, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import IconButton from '../CommonComponents/IconButton/Index'
import Card from '../CommonComponents/Card/Index'
import ActionToolbar from '../CommonComponents/ActionToolbar/Index'
import LinkSection from '../CommonComponents/LinkSection/Index'

import useSetInnerHtml from '../hooks/useSetInnerHtml'
import useGoToSubTopic from '../hooks/useGoToSubTopics'
import useUpdateLikes from '../hooks/useUpdateLikes'

import { getTimeSince } from '../../generic/string/dateFormatter'
import { VideoPlayer, Description } from './Style'

const EmbededYouTube = ({
  topic, user, src, showLinks,
}) => {
  const descRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const goToSubTopic = useGoToSubTopic(topic?.id)
  const updateLikes = useUpdateLikes(topic, user)

  useSetInnerHtml(descRef, topic?.description)
  const expandIcon = isOpen ? <MdExpandLess /> : <MdExpandMore />

  return (
    <Card
      onClick={goToSubTopic}
      username={topic?.createdBy}
      iconSrc={`${topic?.createdByIconSrc}`}
      summary={topic?.summary}
      time={getTimeSince(topic?.createdAt)}
    >
      <VideoPlayer src={src} />
      <Description>
        <span ref={descRef} />
      </Description>
      {showLinks
        && (
          <IconButton
            icon={expandIcon}
            onClick={() => setIsOpen(!isOpen)}
          >
            Show Additional Info
          </IconButton>
        )}
      <Collapse in={isOpen}>
        <div>
          <LinkSection topic={topic} showLinks={showLinks} />
        </div>
      </Collapse>
      <ActionToolbar
        liked={topic?.liked}
        likes={topic?.likes}
        hideReplyIcon
        updateLikes={updateLikes}
      />
    </Card>
  )
}

export default EmbededYouTube
