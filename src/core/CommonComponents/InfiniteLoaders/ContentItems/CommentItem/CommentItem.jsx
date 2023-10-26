/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import React, {
  useState, memo, useEffect, useRef,
} from 'react'
import { useLocation } from 'react-router-dom'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { BlockUI } from 'primereact/blockui'
import { UpArrowSvg, DownArrowSvg } from '../../../../../svgs/svgs'

import IconButton from '../../../IconButton/Index'

import {
  CommentContainer, Body, ExpandButton,
} from './Style'

import { UNDER_REVIEW } from '../../../../../enums/report_status'
import { COMMENT } from '../../../../../enums/content_type'
import ReadOnlyEditor from '../../../Lexical/ReadOnlyEditor.tsx'
import { ParentCommentContext } from './ParentCommentContext.tsx'

import CardFooter from './components/CommentFooter/CommentFooter'
import CommentHeader from './components/CommentHeader/CommentHeader'
import useDetectCurrentPage from '../../../../hooks/routing/useDetectCurrentPage.ts'
import useInitLexicalConfig from '../../../../hooks/lexical/useInitLexicalConfig'
import ModerationOverlay from '../../../PostCard/components/ModerationOverlay/ModerationOverlay'
import { Button } from 'primereact/button'

const COLORS = ['#e6eef9', '#d6dee9', '#c6cee8', '#b6bee8', '#a6aee7', '#969ee7', '#868ee6', '#767ee6', '#666ee5', '#565ee5']

function CommentItem({
  commentData, replies, level, isFocusedComment, parentCollapse,
}) {
  if (!commentData) return null
  const [blocked, setBlocked] = useState(commentData.reportStatus === 'UNDER_REVIEW' || commentData.reportStatus === 'MARKED' || commentData.reportStatus === 'REMOVED')
  const buttonRef = useRef(null);

  const { isOnTribunalPage } = useDetectCurrentPage()
  const repliesRef = useRef({
    isFirstRender: true,
    numReplies: replies.length,
  })

  const {
    spaceId, index, onReplyToggle, resetCacheAtIndex, isReplies,
  } = React.useContext(ParentCommentContext) || {}
  const { pathname } = useLocation()
  const [shouldBlur, setShouldBlur] = useState(commentData?.reportStatus === UNDER_REVIEW || commentData?.toxicityStatus === 'TOXIC')
  const initLexicalConfig = useInitLexicalConfig(commentData?.editorState, 'Civil-Comment', false)

  // Add a new state to keep track of the local toggle status
  const [localToggle, setLocalToggle] = useState(false)
  const [globalCollapse, setGlobalCollapse] = useState(false)

  useEffect(() => {
    if (isReplies || isOnTribunalPage) return
    if (repliesRef.current && repliesRef.current.isFirstRender) {
      repliesRef.current.isFirstRender = false
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
      setLocalToggle(false)
      setGlobalCollapse(true)
    }

    return () => {
      if (isReplies || isOnTribunalPage) return
      if (commentData.parentId === null) {
        setGlobalCollapse(true)
        if (typeof resetCacheAtIndex === 'function') resetCacheAtIndex(index)
      }
    }
  }, [parentCollapse])

  const expandIcon = localToggle ? <UpArrowSvg /> : <DownArrowSvg />
  return (
    <BlockUI blocked={blocked}>
      {/* <OuterContainer> */}
      <CommentContainer hideBorder={level === 0 || isFocusedComment} color={COLORS[level]} isFocusedComment={isFocusedComment}>
        <CommentHeader
          commentData={commentData}
          spaceId={spaceId}
        />

        <Body shouldBlur={shouldBlur}>
          <LexicalComposer initialConfig={initLexicalConfig}>
            <ReadOnlyEditor />
          </LexicalComposer>
          { replies.length !== 0
          && (
          <ExpandButton>
            <Button
              ref={buttonRef}
              text
              icon={expandIcon}
              onClick={() => {
                buttonRef.current.blur();
                if (isReplies || isOnTribunalPage) {
                  setLocalToggle(!localToggle)
                  return
                }
                if (localToggle) onReplyToggle(index, replies.length, true)
                else onReplyToggle(index, replies.length, false)
                setLocalToggle(!localToggle)

                if (localToggle) {
                  setGlobalCollapse(true)
                } else {
                  setGlobalCollapse(false)
                }
              }}
            >
              Replies
            </Button>
          </ExpandButton>
          )}
        </Body>

        <CardFooter
          commentData={commentData}
          shouldBlur={shouldBlur}
          localToggle={localToggle}
          replies={replies}
          globalCollapse={globalCollapse}
          level={level}
        />

      </CommentContainer>
      {(shouldBlur) && (
        <ModerationOverlay
          setShouldBlur={setShouldBlur}
          setBlocked={setBlocked}
          contentId={commentData.id}
          contentType={COMMENT}
          reportStatus={commentData.reportStatus}
          showNavigationToTribunal={
            commentData.reportStatus === UNDER_REVIEW && !pathname.includes('tribunal')
          }
        />
      )}
      {/* </OuterContainer> */}
    </BlockUI>
  )
}

export default memo(CommentItem)
