/* eslint-disable import/no-cycle */
import React, {
  useState, useRef, memo,
} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

import Collapse from 'react-bootstrap/Collapse'
import { UpArrowSvg, DownArrowSvg } from '../../../../svgs/svgs'

import IconButton from '../../../CommonComponents/IconButton/Index'
import CensorOverlay from '../../../CommonComponents/CensorOverlay/Index'

import ActionToolbar from '../../../CommonComponents/ActionToolbars/CommentToolbar/Index'
import {
  CommentContainer, Header, Username, Date, Body, Footer,
  Thumb, ExpandButton, EvidenceSection, Content, UserInfoContainer, OuterContainer,
} from './Style'

import { getTimeSince } from '../../../../generic/string/dateFormatter'
import useSetInnerHtml from '../../../hooks/useSetInnerHtml'

import { ParentCommentContext } from '../CommentColumn/Index'
import ThemeTooltip from '../../../CommonComponents/Tooltip/Index'
import { UNDER_REVIEW } from '../../../../enums/report_status'
import { COMMENT } from '../../../../enums/content_type'

const Comment = ({ commentData, replies, commentRef }) => {
  if (!commentData) return null
  const { topicId } = React.useContext(ParentCommentContext) || {}
  const contentRef = useRef(null)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [shouldBlur, setShouldBlur] = useState(commentData?.reportStatus === UNDER_REVIEW || commentData?.toxicityStatus === 'TOXIC')
  const user = useSelector((s) => s.session.currentUser)

  useSetInnerHtml(contentRef, commentData?.content)

  const mins = getTimeSince(commentData.createdAt)
  const expandIcon = isOpen ? <UpArrowSvg /> : <DownArrowSvg />
  return (
    <OuterContainer ref={commentRef}>
      <CommentContainer>
        <Header onClick={() => navigate(`/topics/${topicId}/subtopics/${commentData.subtopicId}/comments/${commentData.id}`)}>
          <UserInfoContainer>
            <Thumb src={commentData.createdByIconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'} />
            <ThemeTooltip
              tooltipHeader="Experience"
              tooltipText={commentData.createdByExperience}
            />
          </UserInfoContainer>
          <Username>{commentData.createdBy}</Username>
          <Date>{`${mins}`}</Date>
        </Header>
        <Body shouldBlur={shouldBlur} onClick={() => navigate(`/topics/${topicId}/subtopics/${commentData.subtopicId}/comments/${commentData.id}`)}>
          <Content ref={contentRef} />
          { replies.length !== 0
          && (
          <ExpandButton>
            <IconButton
              icon={expandIcon}
              onClick={() => setIsOpen(!isOpen)}
            >
              Replies
            </IconButton>
          </ExpandButton>
          )}
        </Body>
        <Footer shouldBlur={shouldBlur}>
          <ActionToolbar
            likes={commentData?.likes}
            comment={commentData}
            user={user}
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
        </Footer>

      </CommentContainer>
      { shouldBlur && (
      <CensorOverlay
        setShouldBlur={setShouldBlur}
        contentId={commentData?.id}
        contentType={COMMENT}
        showNavigationToTribunal={commentData?.reportStatus === UNDER_REVIEW && !pathname.includes('tribunal')}
      />
      )}
    </OuterContainer>

  )
}

export default memo(Comment)
