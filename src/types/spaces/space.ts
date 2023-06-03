import { LikeAction, ReportStatus, UserVerificationType } from "../enums/enums";

type UUID = string
type ZonedDateTime = string
type SpaceCategories = string

export interface Space {
  id: UUID;
  title: string;
  createdByUserId: string;
  createdByUsername: string;
  createdByTag: string | null;
  editorState: string;
  createdByIconSrc: string;
  likes: number;
  likeState: LikeAction;
  category: SpaceCategories;
  reportStatus: ReportStatus;
  userVerificationType: UserVerificationType;
  createdAt: ZonedDateTime;
  updatedAt: ZonedDateTime;
  isFollowing: boolean;
  referenceLinks: string[] | null;
}