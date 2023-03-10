/* eslint-disable import/no-cycle */
import React, {
  useState, memo,
} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Collapse from 'react-bootstrap/Collapse'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { UpArrowSvg, DownArrowSvg } from '../../../../../svgs/svgs'

import IconButton from '../../../../CommonComponents/IconButton/Index'
import CensorOverlay from '../../../../CommonComponents/CensorOverlay/Index'

import ActionToolbar from '../../../../CommonComponents/ActionToolbars/CommentToolbar/Index'
import {
  CommentContainer, Header, Username, Date, Body, Footer,
  Thumb, ExpandButton, EvidenceSection, UserInfoContainer, OuterContainer,
} from './Style'

import { getTimeSince } from '../../../../../generic/string/dateFormatter'

import PlaygroundEditorTheme from '../../../../CommonComponents/Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../../../CommonComponents/Lexical/nodes/PlaygroundNodes.ts'

import ThemeTooltip from '../../../../CommonComponents/Tooltip/Index'
import { UNDER_REVIEW } from '../../../../../enums/report_status'
import { COMMENT } from '../../../../../enums/content_type'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'
import ReadOnlyEditor from '../../../../CommonComponents/Lexical/ReadOnlyEditor.tsx'
import { ParentCommentContext } from '../CommentColumn/ParentCommentContext'

function Comment({
  commentData, replies, commentRef, level, isFocusedComment,
}) {
  if (!commentData) return null
  const { topicId } = React.useContext(ParentCommentContext) || {}
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [shouldBlur, setShouldBlur] = useState(commentData?.reportStatus === UNDER_REVIEW || commentData?.toxicityStatus === 'TOXIC')
  const { currentUser } = useGetCurrentUser()

  const mins = getTimeSince(commentData.createdAt)
  const initialConfigReadOnly = {
    editorState: JSON.parse(commentData?.editorState),
    namespace: 'Civil3',
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    editable: false,
    theme: PlaygroundEditorTheme,
  }
  const expandIcon = isOpen ? <UpArrowSvg /> : <DownArrowSvg />
  const colors = ['#e6eef9', '#d6dee9', '#c6cee8', '#b6bee8', '#a6aee7', '#969ee7', '#868ee6', '#767ee6', '#666ee5', '#565ee5']
  return (
    <OuterContainer ref={commentRef}>
      <CommentContainer color={colors[level]} isFocusedComment={isFocusedComment}>
        <Header onClick={() => navigate(`/home/topics/${topicId}/discussions/${commentData.discussionId}/comments/${commentData.id}`)}>
          <UserInfoContainer>
            <Thumb src={commentData.createdByIconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/assets/profile_icon_2.png'} />
            <ThemeTooltip
              tooltipHeader="Experience"
              tooltipText={commentData.createdByExperience}
            />
          </UserInfoContainer>
          <Username>{longUsernameDisplay(commentData.createdByUsername)}</Username>
          <Date>{`${mins}`}</Date>
        </Header>
        <Body shouldBlur={shouldBlur} onClick={() => navigate(`/home/topics/${topicId}/discussions/${commentData.discussionId}/comments/${commentData.id}`)}>
          <LexicalComposer initialConfig={initialConfigReadOnly}>
            <ReadOnlyEditor />
          </LexicalComposer>
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
            user={currentUser}
          />
          <Collapse in={isOpen}>
            <EvidenceSection>
              {
              replies.map((reply, idx) => (
                <Comment
                  key={commentData.id + String(idx)}
                  commentData={reply.data}
                  replies={reply.children}
                  level={level + 1}
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
