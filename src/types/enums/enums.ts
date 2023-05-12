enum LikeAction {
  LikedState = 'LikedState',
  DislikedState = 'DislikedState',
  NeutralState = 'NeutralState'
}

enum UserVerificationType {
  CAPTCHA_VERIFIED = 'CAPTCHA_VERIFIED',
  FACE_ID_VERIFIED = 'FACE_ID_VERIFIED',
  FACE_ID_AND_CAPTCHA_VERIFIED = 'FACE_ID_AND_CAPTCHA_VERIFIED',
  NO_VERIFICATION = 'NO_VERIFICATION'
}

enum ReportStatus {
  Clean = 'Clean',
  Under_Review = 'Under_Review',
  Removed = 'Removed'
}