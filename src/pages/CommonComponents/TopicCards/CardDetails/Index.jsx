import React, { useRef, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import IconButton from '../../IconButton/Index'
import LinkSection from '../../LinkSection/Index'
import ActionToolbar from '../../ActionToolbar/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import { Description } from './Style'

const CardDetails = ({
  showLinks,
  topic,
  onCommentClick,
  updateLikes,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const descRef = useRef(null)
  useSetInnerHtml(descRef, topic?.description)
  const expandIcon = isOpen ? <MdExpandLess /> : <MdExpandMore />

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
        liked={topic?.liked}
        likes={topic?.likes}
        onCommentClick={onCommentClick}
        updateLikes={updateLikes}
      />
    </>
  )
}

export default CardDetails
