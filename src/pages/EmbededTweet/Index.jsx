import React, {
  useEffect, useRef, useState,
} from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { Collapse } from 'react-bootstrap'

import Card from '../CommonComponents/Card/Index'
import LinkSection from '../CommonComponents/LinkSection/Index'
import IconButton from '../CommonComponents/IconButton/Index'

import useCalculateCardHeightEffect from './hooks/useCalculateCardHeightEffect'
import useUpdateLikes from '../hooks/useUpdateLikes'
import useGoToSubTopics from '../hooks/useGoToSubTopics'
import useOpenModalWithLocation from '../hooks/useOpenModalWithLocation'

import { getTimeSince } from '../../generic/string/dateFormatter'
import { TweetContainer, ExpandButton, StyledActionToolbar } from './Style'

const EmbededTweet = ({ topic, user, showLinks }) => {
  const [isOpen, setIsOpen] = useState(false)
  const tweetRef = useRef(null)
  const openModal = useOpenModalWithLocation('TOPIC_REPLY')

  const updateLikes = useUpdateLikes(topic, user)
  const goToSubTopic = useGoToSubTopics(topic?.id)
  const height = useCalculateCardHeightEffect(tweetRef, showLinks, isOpen)

  useEffect(() => {
    if (topic?.tweetHtml) {
      if (tweetRef.current) {
        tweetRef.current.innerHTML = topic?.tweetHtml?.toString() || '<span>Nothing</span>'
      }
    }
  }, [topic?.tweetHtml])

  const expandIcon = isOpen ? <MdExpandLess /> : <MdExpandMore />

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
      {showLinks
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
      <StyledActionToolbar
        liked={topic?.liked}
        likes={topic?.likes}
        onCommentClick={openModal}
        updateLikes={updateLikes}
      />
    </Card>
  )
}

export default EmbededTweet
