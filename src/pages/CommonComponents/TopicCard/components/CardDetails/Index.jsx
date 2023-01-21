import React, { useRef, useState } from 'react'

import { UpArrowSvg, DownArrowSvg } from '../../../../../svgs/svgs'
import IconButton from '../../../IconButton/Index'
import LinkSection from '../../../LinkSection/Index'
import ActionToolbar from '../../../ActionToolbars/TopicToolbar/Index'
import useSetInnerHtml from '../../../../hooks/useSetInnerHtml'
import { Description, LinkSectionContainer } from './Style'
import Editor from '../../../Lexical/ReadOnlyEditor.tsx'

const CardDetails = ({
  showLinks,
  topic,
  user,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const descRef = useRef(null)
  useSetInnerHtml(descRef, topic?.description)
  const expandIcon = isOpen ? <UpArrowSvg /> : <DownArrowSvg />

  return (
    <>
      <Description onClick={(e) => e.stopPropagation()}>
        <Editor />
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
      <LinkSectionContainer isOpen={isOpen}>
        <LinkSection topic={topic} showLinks={showLinks} />
      </LinkSectionContainer>
      <ActionToolbar
        likes={topic?.likes}
        topic={topic}
        user={user}
      />
    </>
  )
}

export default CardDetails
