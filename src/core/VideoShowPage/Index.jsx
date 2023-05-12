import React, { useState, useRef } from 'react'
import { Collapse } from 'react-bootstrap'
// import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { UpArrowSvg, DownArrowSvg } from '../../svgs/svgs'

import { VideoDescriptionCard } from '../CommonComponents/Card/Index'
import ActionToolbar from '../CommonComponents/ActionToolbars/SpaceToolbar/Index'
import LinkSection from '../CommonComponents/LinkSection/Index'
import IconButton from '../CommonComponents/IconButton/Index'

import spaceActionCreators from '../../redux/actions/spaces'

import useSetInnerHtml from '../hooks/useSetInnerHtml'
import useOpenModal from '../hooks/useOpenModalWithLocation'
import useBindDispatch from '../hooks/redux/useBindDispatch'
import useUpdateLikes from './hooks/useUpdateLikes'
import useGoToDiscussion from '../hooks/routing/useGoToDiscussions'
import { getTimeSince } from '../../generic/string/dateFormatter'

import { VideoPlayer, Description, ExpandButton } from './Style'

function VideoShowPage({
  space, user, src, showLinks,
}) {
  const descRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useOpenModal('SPACE_REPLY')
  const goToDiscussion = useGoToDiscussion(space.id)
  const { updateSpaceLikes } = useBindDispatch(spaceActionCreators)
  const updateLikes = useUpdateLikes(updateSpaceLikes, space, user)
  useSetInnerHtml(descRef, space?.editorState)

  const expandIcon = isOpen ? <UpArrowSvg /> : <DownArrowSvg />

  return (
    <div style={{ width: '100%' }}>
      <VideoPlayer src={src} loading="lazy" />
      <VideoDescriptionCard
        onClick={goToDiscussion}
        username={space?.createdByUsername}
        iconSrc={`${space?.createdByIconSrc}`}
        summary={space?.summary}
        time={getTimeSince(space?.createdAt)}
      >
        <Description>
          <span ref={descRef} />
        </Description>
        {space?.evidenceLinks.length !== 0
        && (
        <ExpandButton>
          <IconButton
            icon={expandIcon}
            onClick={() => setIsOpen(!isOpen)}
          >
            Additional Info
          </IconButton>
        </ExpandButton>
        )}
        <Collapse in={isOpen}>
          <div>
            <LinkSection space={space} showLinks={showLinks} />
          </div>
        </Collapse>
        <ActionToolbar
          likes={space?.likes}
          space={space}
          user={user}
        />
      </VideoDescriptionCard>
    </div>
  )
}

export default VideoShowPage
