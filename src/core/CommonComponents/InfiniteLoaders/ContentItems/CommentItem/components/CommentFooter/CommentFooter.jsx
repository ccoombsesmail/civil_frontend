/* eslint-disable import/no-cycle */
import React, { memo } from 'react'
import { Footer } from '../../Style'
import Expandable from '../../../../../Expandable/Expandable'
import CommentActionToolbar from '../../../../../ActionToolbars/CommentToolbar/Index'
import { EvidenceSection } from './Style'
import CommentItem from '../../CommentItem'

function CommentFooter({
  commentData,
  shouldBlur,
  localToggle,
  replies,
  globalCollapse,
  level,
}) {
  return (
    <Footer shouldBlur={shouldBlur}>
      <CommentActionToolbar
        comment={commentData}
      />
      <Expandable isOpen={localToggle}>
        <EvidenceSection>
          {
        replies.map((reply, idx) => (
          <CommentItem
            key={commentData.id + String(idx)}
            commentData={reply.data}
            replies={reply.children}
            level={level + 1}
            parentCollapse={globalCollapse}
          />
        ))

        }
        </EvidenceSection>
      </Expandable>
    </Footer>
  )
}

export default memo(CommentFooter)
