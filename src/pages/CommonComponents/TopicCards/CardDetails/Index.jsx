import React, { useRef, useState } from 'react'
import { Collapse } from 'react-bootstrap'
// import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import { UpArrowSvg, DownArrowSvg } from '../../../../svgs/svgs'
import IconButton from '../../IconButton/Index'
import LinkSection from '../../LinkSection/Index'
import ActionToolbar from '../../ActionToolbars/TopicToolbar/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import { Description } from './Style'

const CardDetails = ({
  showLinks,
  topic,
  user,
  onCommentClick,
  updateLikes,
  topicCard = true,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const descRef = useRef(null)
  useSetInnerHtml(descRef, topic?.description)
  const expandIcon = isOpen ? <UpArrowSvg /> : <DownArrowSvg />

  return (
    <>
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
        likes={topic?.likes}
        topic={topic}
        user={user}
      />
    </>
  )
}

export default CardDetails
