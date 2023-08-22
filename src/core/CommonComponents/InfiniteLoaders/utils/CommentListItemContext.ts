import React from 'react'

export interface CommentListItemContextValue {
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

export const CommentListItemContext = React.createContext(null)
