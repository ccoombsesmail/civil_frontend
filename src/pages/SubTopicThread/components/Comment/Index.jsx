import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'

import Collapse from 'react-bootstrap/Collapse'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import IconButton from '../../../CommonComponents/IconButton/Index'
import ActionToolbar from '../../../CommonComponents/ActionToolbar/Index'
import { CommentContainer, Header, Username, Date, Body, Thumb, ExpandButton, EvidenceSection, Content } from './Style'

import { getTimeSince } from '../../../../generic/string/dateFormatter'
import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useUpdateCommentLikes from './hooks/useUpdateCommentLikes'
import useOpenReplyModal from './hooks/useOpenReplyModal'
import { ParentCommentContext } from '../CommentColumn/Index'

const Comment = ({ rootComment, commentData, replies }) => {
  if (!commentData) return null
  const rootParentCommentId = React.useContext(ParentCommentContext);
  console.log(rootParentCommentId)
  const contentRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const user = useSelector(s => s.session.currentUser)
  const updateLikes = useUpdateCommentLikes(commentData, rootComment, user)
  const openReplyModal = useOpenReplyModal(commentData.id, rootParentCommentId)
  useSetInnerHtml(contentRef, commentData?.content)
  
  const mins = getTimeSince(commentData.createdAt)
  const expandIcon = isOpen ? <MdExpandLess /> : <MdExpandMore /> 
  return (
    <CommentContainer>
      <Header> 
        <Thumb src={commentData.iconSrc} />
        <Username>{commentData.createdBy}</Username>
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
        Replies
      </IconButton>
      </ExpandButton>
      </Body>
      <ActionToolbar likes={rootComment?.likes || commentData.likes} liked={rootComment?.liked || commentData.liked} updateLikes={updateLikes} onCommentClick={openReplyModal} />
      <Collapse in={isOpen}>
        <EvidenceSection> 
          {
           replies.map((reply, idx) => <Comment key={commentData.id + String(idx)} commentData={reply.data} replies={reply.children} />)
          }        
        </EvidenceSection>
      </Collapse>
    </CommentContainer>

  )
}


export default Comment