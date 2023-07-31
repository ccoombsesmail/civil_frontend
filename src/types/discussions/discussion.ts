import { LikeAction, LinkType } from "../enums/enums";

type UUID = string;
type ZonedDateTime = string;



interface ExternalContentData {
  linkType: LinkType;
  externalContentUrl: string;
  embedId: string | null;
  thumbImgUrl: string | null;
}

export interface Discussion {
  id: UUID;
  spaceId: UUID;
  createdAt: ZonedDateTime;
  createdByUsername: string;
  createdByUserId: string;
  createdByIconSrc: string;
  title: string;
  editorState: string;
  evidenceLinks: string[] | null;
  userUploadedImageUrl: string | null;
  userUploadedVodUrl: string | null;
  externalContentData: ExternalContentData | null;
  likes: number;
  liked: boolean;
  allComments: number;
  positiveComments: number;
  neutralComments: number;
  negativeComments: number;
  totalCommentsAndReplies: number;
  likeState: LikeAction;
  isFollowing: boolean

}