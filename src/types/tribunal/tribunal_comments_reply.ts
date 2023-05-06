export interface LikeAction {
}

export function isLikeAction(v: any): v is LikeAction {
  return (
    typeof v === 'object' && Object.keys(v).length === 0
  );
}

export interface TribunalCommentType {
}

export function isTribunalCommentType(v: any): v is TribunalCommentType {
  return (
    typeof v === 'object' && Object.keys(v).length === 0
  );
}



export interface TribunalCommentsReply {
  id: string;
  editorState: string;
  createdByUserId: string;
  createdByUsername: string;
  sentiment: string;
  reportedContentId: string;
  parentId?: string;
  createdAt: Date;
  likes: number;
  rootId?: string;
  likeState: LikeAction;
  civility: number;
  source?: string;
  createdByIconSrc: string;
  createdByExperience?: string;
  createdByTag?: string;
  commentType: TribunalCommentType;
}

export interface IncomingComment {
  editorState: string;
  editorTextContent: string;
  createdByUsername: string;
  contentId: string;
  parentId?: string;
  rootId?: string;
  source?: string;
  topicId: string;
}


export const TribunalCommentKeys = [
  'editorState',
  'editorTextContent',
  'createdByUsername',
  'contentId',
  'parentId',
  'rootId',
  'source',
  'topicId',
]