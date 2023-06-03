import React, { useState } from 'react'

import { UpArrowSvg, DownArrowSvg } from '../../../../../svgs/svgs'
import IconButton from '../../../IconButton/Index'
import LinkSection from '../../../LinkSection/Index'
import ActionToolbar from '../../../ActionToolbars/SpaceToolbar/Index'
import { Description, LinkSectionContainer } from './Style'
import Editor from '../../../Lexical/ReadOnlyEditor.tsx'

function CardDetails({
  showLinks = true,
  space,
  discussion,
  user,
  hideCommentButton,
  currentPage,
}) {
  const [isOpen, setIsOpen] = useState(false)
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
            Additional Info
          </IconButton>
        )}
      <LinkSectionContainer isOpen={isOpen}>
        <LinkSection space={space} showLinks={showLinks} />
      </LinkSectionContainer>
      <ActionToolbar
        likes={space?.likes}
        discussion={discussion}
        space={space}
        user={user}
        hideCommentButton={hideCommentButton}
        currentPage={currentPage}
      />
    </>
  )
}

export default CardDetails
