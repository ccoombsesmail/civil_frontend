import { LikeAction } from "../enums/enums";

export interface CreatedByUserData {
  reatedByUsername: string;
  createdByUserId: string;
  createdByTag: string | null;
  civilityPoints: number;
  createdByIconSrc: string;
  createdByExperience: string | null;
  numFollowers: number

}

export interface Comment {
  id: string;
  editorState: string;
  sentiment: string;
  discussionId: string;
  parentId: string | null;
  createdAt: string;
  likes: number;
  rootId: string | null;
  likeState: LikeAction;
  civility: number;
  source: string | null;
  reportStatus: string;
  toxicityStatus: string | null;
  reportedContentId: string 
  commentType: string,
  createdByUserData: CreatedByUserData
}