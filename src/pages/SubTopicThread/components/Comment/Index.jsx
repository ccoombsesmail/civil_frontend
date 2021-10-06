import React, { useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import Collapse from 'react-bootstrap/Collapse'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import IconButton from '../../../CommonComponents/IconButton/Index'
import ActionToolbar from '../../../CommonComponents/ActionToolbar/Index'
import { CommentContainer, Header, Username, Date, Body, Thumb, ExpandButton, EvidenceSection, Content } from './Style'

import { getTimeSince } from '../../../../generic/string/dateFormatter'
import commentActions from '../../../../redux/actions/comments'
import { BiCommentEdit } from 'react-icons/bi'
import useSetInnerHtml from '../../../hooks/useSetInnerHtml'

const Comment = ({ comment }) => {
  const contentRef = useRef(null)
  const dispatch = useDispatch()
  const { updateCommentLikes } = bindActionCreators(commentActions, dispatch)
  const user = useSelector(s => s.session.currentUser)
  const updateLikes = useCallback(() => {
    updateCommentLikes({id: comment.id, userId: user?.id, increment: !comment.liked})
    }, [comment.liked])
  
  const mins = getTimeSince(comment.createdAt)
  const [isOpen, setIsOpen] = useState(false)
  const expandIcon = isOpen ? <MdExpandLess /> : <MdExpandMore /> 
  useSetInnerHtml(contentRef, comment?.content)
  return (
    <CommentContainer>
      <Header> 
        <Thumb src={comment.iconSrc} />
        <Username>{comment.createdBy}</Username>
        <Date>{`${mins}`}</Date>
      </Header>
      <Body> 
      <Content ref={contentRef}>
      </Content>
      <ExpandButton> 
        <IconButton
          icon={expandIcon}
          onClick={() => setIsOpen(!isOpen)}
        > 
        Evidence
      </IconButton>
      </ExpandButton>
      </Body>
      <Collapse in={isOpen}>
        <EvidenceSection> 
          Some Content          
        </EvidenceSection>
      </Collapse>
      <ActionToolbar likes={comment.likes} liked={comment.liked} updateLikes={updateLikes} />
    </CommentContainer>

  )
}


export default Comment