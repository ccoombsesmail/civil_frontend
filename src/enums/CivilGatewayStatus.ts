export enum CivilGatewayStatus {
  UNKNOWN = 0,
  CHECKING = 1,
  NOT_REQUESTED = 2,
  COLLECTING_USER_INFORMATION = 3,
  PROOF_OF_WALLET_OWNERSHIP = 4,
  IN_REVIEW = 5,
  REJECTED = 6,
  REVOKED = 7,
  FROZEN = 8,
  "Verified" = 9,
  ERROR = 10,
  LOCATION_NOT_SUPPORTED = 11,
  VPN_NOT_SUPPORTED = 12,
  "Refresh Required" = 13,
  VALIDATING_USER_INFORMATION = 14,
  USER_INFORMATION_VALIDATED = 15,
  USER_INFORMATION_REJECTED = 16
}