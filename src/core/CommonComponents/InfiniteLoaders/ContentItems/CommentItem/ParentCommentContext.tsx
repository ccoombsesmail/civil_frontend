import React from 'react'

export interface ParentCommentContextValue {
  commentId: string;
  spaceId: string;
  isReplies: boolean;
  currentPage: number;
  index: number;
  onReplyToggle: boolean;
  resetCacheAtIndex: number;
  rootOfCommentReplyThreadId: string;
  isFocusedComment: boolean,
  focusedCommentId: string,
  commentType: string
}

export const ParentCommentContext = React.createContext(null)
