import { useCallback, useMemo } from "react"
import { useWallet } from '@solana/wallet-adapter-react'
import { createCivicAuthToken, MemoryStoredToken } from "../utils/generateCivicAuthHeader"
import b58 from "bs58";

export default () => {
  const wallet = useWallet()


  return useCallback(async () => {
    let authToken: string;
    const memoryToken = MemoryStoredToken.getInstance().token;
    if (memoryToken) {
      const [, msg] = memoryToken.split(".");
      const contents = JSON.parse(
        new TextDecoder().decode(b58.decode(msg))
      ) as { exp: number };
      if (Date.now() > contents.exp) {
        authToken = await createCivicAuthToken(wallet);
        MemoryStoredToken.getInstance().setToken(authToken);
      } else {
        authToken = memoryToken;
      }
    } else {
      authToken = await createCivicAuthToken(wallet);
      MemoryStoredToken.getInstance().setToken(authToken);
    }
    return authToken
  }, [wallet])
}