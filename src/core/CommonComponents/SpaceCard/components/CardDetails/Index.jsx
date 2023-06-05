import React, { useState } from 'react'

import { UpArrowSvg, DownArrowSvg } from '../../../../../svgs/svgs'
import IconButton from '../../../IconButton/Index'
import LinkSection from '../../../LinkSection/Index'
import ActionToolbar from '../../../ActionToolbars/SpaceToolbar/Index'
import { Description, LinkSectionContainer } from './Style'
import Editor from '../../../Lexical/ReadOnlyEditor.tsx'

function CardDetails({
  space,
  discussion,
  user,
  hideCommentButton,
  currentPage,
}) {
  return (
    <ActionToolbar
      likes={space?.likes}
      discussion={discussion}
      space={space}
      user={user}
      hideCommentButton={hideCommentButton}
      currentPage={currentPage}
    />
  )
}

export default CardDetails
