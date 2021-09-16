import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import IconButton from '../../../CommonComponents/IconButton/Index'

import { CommentContainer, Header, Username, Date, Body, UserIcon, ExpandButton, EvidenceSection } from './Style'
import { getTimeSince } from '../../../../generic/string/dateFormatter'
const Comment = ({ comment }) => {
  const mins = getTimeSince(comment.createdAt)
  const [isOpen, setIsOpen] = useState(false)
  const expandIcon = isOpen ? <MdExpandLess /> : <MdExpandMore /> 
  return (
    <CommentContainer>
      <Header> 
        <UserIcon />
        <Username>{comment.createdBy}</Username>
        <Date>{`${mins}`}</Date>
      </Header>
      <Body> 
        {comment.content}
      <ExpandButton> 
        <IconButton
          icon={expandIcon}
          onClick={() => setIsOpen(!isOpen)}
        > Evidence</IconButton>
      </ExpandButton>
      </Body>
      <Collapse in={isOpen}>
        <EvidenceSection> 
          {/* <Spacer /> */}
          Some Content          
        </EvidenceSection>
      </Collapse>
    </CommentContainer>

  )
}


export default Comment