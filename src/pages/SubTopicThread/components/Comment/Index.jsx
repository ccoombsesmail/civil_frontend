/* eslint-disable import/no-cycle */
import React, {
  useState, useRef, memo,
} from 'react'
import { useSelector } from 'react-redux'

import Collapse from 'react-bootstrap/Collapse'
// import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import { UpArrowSvg, DownArrowSvg } from '../../../../svgs/svgs'

import IconButton from '../../../CommonComponents/IconButton/Index'
import ActionToolbar from '../../../CommonComponents/ActionToolbar/Index'
import {
  CommentContainer, Header, Username, Date, Body, Thumb, ExpandButton, EvidenceSection, Content,
} from './Style'

import { getTimeSince } from '../../../../generic/string/dateFormatter'
import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useUpdateCommentLikes from './hooks/useUpdateCommentLikes'
import useUpdateCommentCivility from './hooks/useUpdateCommentCivility'

import useOpenReplyModal from './hooks/useOpenReplyModal'
import { ParentCommentContext } from '../CommentColumn/Index'

const Comment = ({ commentData, replies }) => {
  if (!commentData) return null
  const rootParentCommentId = React.useContext(ParentCommentContext)
  const contentRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const user = useSelector((s) => s.session.currentUser)
  const updateLikes = useUpdateCommentLikes(commentData, user)
  const openReplyModal = useOpenReplyModal(commentData.id, rootParentCommentId)
  const updateCivility = useUpdateCommentCivility(commentData, user)

  useSetInnerHtml(contentRef, commentData?.content)

  const mins = getTimeSince(commentData.createdAt)
  const expandIcon = isOpen ? <UpArrowSvg /> : <DownArrowSvg />
  return (
    <CommentContainer>
      <Header>
        <Thumb src={commentData.createdByIconSrc} />
        <Username>{commentData.createdBy}</Username>
        <Date>{`${mins}`}</Date>
      </Header>
      <Body>
        <Content ref={contentRef} />
        { replies.length !== 0
        && (
        <ExpandButton>
          <IconButton
            icon={expandIcon}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* {commentData.id} */}
            Replies
          </IconButton>
        </ExpandButton>
        )}
      </Body>
      <ActionToolbar
        likes={commentData.likes}
        liked={commentData.liked}
        updateLikes={updateLikes}
        onCommentClick={openReplyModal}
        updateCivility={updateCivility}
        civil={commentData.civil}
      />
      <Collapse in={isOpen}>
        <EvidenceSection>
          {
           replies.map((reply, idx) => (
             <Comment
               key={commentData.id + String(idx)}
               commentData={reply.data}
               replies={reply.children}
             />
           ))
          }
        </EvidenceSection>
      </Collapse>
    </CommentContainer>

  )
}

export default memo(Comment)
