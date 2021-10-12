import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'

import ActionToolbar from '../../../CommonComponents/ActionToolbar/Index'
import { CommentContainer, Header, Username, Date, Body, Thumb, ExpandButton, EvidenceSection, Content } from './Style'

import { getTimeSince } from '../../../../generic/string/dateFormatter'
import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useUpdateCommentLikes from './hooks/useUpdateCommentLikes'
import useOpenReplyModal from './hooks/useOpenReplyModal'

const CommentReply = ({ data, children }) => {
  const contentRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const user = useSelector(s => s.session.currentUser)
  const updateLikes = useUpdateCommentLikes(comment, user)
  const openReplyModal = useOpenReplyModal(comment.id)
  useSetInnerHtml(contentRef, comment?.content)
  
  const mins = getTimeSince(comment.createdAt)
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
      </Body>
      <ActionToolbar likes={comment.likes} liked={comment.liked} updateLikes={updateLikes} onCommentClick={openReplyModal} />
    </CommentContainer>

  )
}


export default CommentReply