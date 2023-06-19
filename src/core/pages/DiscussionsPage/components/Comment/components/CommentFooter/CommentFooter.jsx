/* eslint-disable import/no-cycle */
import React from 'react'
import { Footer } from '../../Style'
import Expandable from '../../../../../../CommonComponents/Expandable/Expandable'
import CommentActionToolbar from '../../../../../../CommonComponents/ActionToolbars/CommentToolbar/Index'
import { EvidenceSection } from './Style'
import Comment from '../../Index'

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
      </Expandable>
    </Footer>
  )
}

export default CommentFooter
