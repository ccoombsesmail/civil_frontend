import { State } from "@identity.com/solana-gateway-ts";
import { GatewayToken } from '@civic/profile';


export const isValid = (token: GatewayToken) => {
  return token.state === State.ACTIVE && !hasExpired(token);
}

const hasExpired = (token: GatewayToken): boolean => {
  const now = Math.floor(Date.now() / 1000);
  return !!token.expiryTime && now > token.expiryTime;
}
