import { LikeAction } from "../enums/enums";

export interface Comment {
  id: string;
  editorState: string;
  createdByUsername: string;
  createdByUserId: string;
  createdByTag: string | null;
  sentiment: string;
  discussionId: string;
  parentId: string | null;
  createdAt: string;
  likes: number;
  rootId: string | null;
  likeState: LikeAction;
  civility: number;
  source: string | null;
  createdByIconSrc: string;
  createdByExperience: string | null;
  reportStatus: string;
  toxicityStatus: string | null;
}