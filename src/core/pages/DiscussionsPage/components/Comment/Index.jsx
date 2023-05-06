/* eslint-disable import/no-cycle */
import React, {
  useState, memo, useEffect, useRef
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

import ThemeTooltip from '../../../../CommonComponents/Tooltip/Index'
import { UNDER_REVIEW } from '../../../../../enums/report_status'
import { COMMENT } from '../../../../../enums/content_type'
import useGetCurrentUser from '../../../../App/hooks/useGetCurrentUser'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'
import ReadOnlyEditor from '../../../../CommonComponents/Lexical/ReadOnlyEditor.tsx'
import { ParentCommentContext } from '../CommentColumn/ParentCommentContext'
import useInitLexicalConfig from '../../../../hooks/lexical/useInitLexicalConfig'
import useDetectCurrentPage from '../../../../hooks/routing/useDetectCurrentPage'


const COLORS = ['#e6eef9', '#d6dee9', '#c6cee8', '#b6bee8', '#a6aee7', '#969ee7', '#868ee6', '#767ee6', '#666ee5', '#565ee5']

function Comment({
  commentData, replies, commentRef, level, isFocusedComment, parentCollapse
}) {
  if (!commentData) return null

  const { isOnTribunalPage } = useDetectCurrentPage()
  const repliesRef = useRef({
    isFirstRender: true,
    numReplies: replies.length
  });

  const { topicId, index, onReplyToggle, resetCacheAtIndex, isReplies } = React.useContext(ParentCommentContext) || {}
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [shouldBlur, setShouldBlur] = useState(commentData?.reportStatus === UNDER_REVIEW || commentData?.toxicityStatus === 'TOXIC')
  const { currentUser } = useGetCurrentUser()
  const mins = getTimeSince(commentData.createdAt)
  const initLexicalConfig = useInitLexicalConfig(commentData?.editorState, 'Civil-Comment', false)

  // Add a new state to keep track of the local toggle status
  const [localToggle, setLocalToggle] = useState(false);
  const [globalCollapse, setGlobalCollapse] = useState(false);

  useEffect(() => {

    if (isReplies || isOnTribunalPage) return
    if (repliesRef.current && repliesRef.current.isFirstRender) {
      repliesRef.current.isFirstRender = false;
    } else if (repliesRef.current && !repliesRef.current.isFirstRender) {
      if (repliesRef.current.numReplies !== replies.length && localToggle) {
        onReplyToggle(index, 1, false)
      }
    }
    
  }, [replies])

  useEffect(() => {
    if (isReplies || isOnTribunalPage) return

    if (parentCollapse) {
      if (localToggle) onReplyToggle(index, replies.length, true)
      setLocalToggle(false);
      setGlobalCollapse(true)
    }

    return () => {
      if (isReplies || isOnTribunalPage) return
      if (commentData.parentId === null) {
        setGlobalCollapse(true)
        if ( typeof resetCacheAtIndex == 'function') resetCacheAtIndex(index)
      }
    }
  }, [parentCollapse]);
  const expandIcon = localToggle ? <UpArrowSvg /> : <DownArrowSvg />
  return (
    <OuterContainer>
      <CommentContainer hideBorder={level === 0} color={COLORS[level]} isFocusedComment={isFocusedComment}>
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
          <LexicalComposer initialConfig={initLexicalConfig}>
            <ReadOnlyEditor />
          </LexicalComposer>
          { replies.length !== 0
          && (
          <ExpandButton>
            <IconButton
              icon={expandIcon}
              onClick={() => {
                if (isReplies  || isOnTribunalPage)  {
                  setLocalToggle(!localToggle)
                  return
                }
                let newSize
                if (localToggle) onReplyToggle(index, replies.length, true)
                else newSize = onReplyToggle(index, replies.length, false)
                setLocalToggle(!localToggle)

                if (localToggle) {
                  setGlobalCollapse(true);
                } else {
                  setGlobalCollapse(false);
                }
              }}
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
          <Collapse in={localToggle}>
            <EvidenceSection>
              {
              replies.map((reply, idx) => (
                <Comment
                  key={commentData.id + String(idx)}
                  commentData={reply.data}
                  replies={reply.children}
                  level={level + 1}
                  parentCollapse={globalCollapse}
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
