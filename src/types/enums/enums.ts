export enum LikeAction {
  LikedState = 'LikedState',
  DislikedState = 'DislikedState',
  NeutralState = 'NeutralState'
}

export enum UserVerificationType {
  CAPTCHA_VERIFIED = 'CAPTCHA_VERIFIED',
  FACE_ID_VERIFIED = 'FACE_ID_VERIFIED',
  FACE_ID_AND_CAPTCHA_VERIFIED = 'FACE_ID_AND_CAPTCHA_VERIFIED',
  NO_VERIFICATION = 'NO_VERIFICATION'
}

export enum ReportStatus {
  Clean = 'Clean',
  Under_Review = 'Under_Review',
  Removed = 'Removed'
}

export enum ContentType {
  SPACE = 'SPACE',
  DISCUSSION = 'DISCUSSION',
  COMMENT = 'COMMENT',
  TRIBUNAL_COMMENT = 'TRIBUNAL_COMMENT'
}

export enum LinkType {
  YouTube = 'YouTube',
  Twitter = 'Twitter',
  Web = 'Web'
}