import { web3 } from "@project-serum/anchor";
import axios, { Method } from "axios";
import b58 from "bs58";
import { GatewayToken, CivicProfile } from '@civic/profile'
import { clusterApiUrl, PublicKey, Connection } from '@solana/web3.js'

type MessageSigner = {
  signMessage(message: Uint8Array): Promise<Uint8Array>;
  publicKey: web3.PublicKey;
};

/**
 * Singleton class for storing a valid signature on-memory.
 */
export class  MemoryStoredToken {
  private constructor(public token: string | null = null) {}
  private static instance: MemoryStoredToken;
  static getInstance(): MemoryStoredToken {
    if (!MemoryStoredToken.instance) {
      MemoryStoredToken.instance = new MemoryStoredToken();
    }
    return MemoryStoredToken.instance;
  }
  public setToken(token: string) {
    this.token = token;
  }
}

/**
 * Creates an authentication token to be passed to the server
 * via auth headers, returns the following format:
 * `pubKey.message.signature` (All in base58).
 * @param wallet Signer.
 * @param exp Expiration time in minutes.
 * @returns {Promise<string>} pubKey.message.signature (All in base58)
 */

export const createCivicAuthToken = async (
  wallet: MessageSigner,
  exp = Date.now() + 2_000_000
) => {
  const { publicKey } = wallet
  const pubKey = publicKey?.toBase58()
  if (!pubKey) return undefined


  const encodedMessage = new TextEncoder().encode(
    JSON.stringify({
      verifyOwnership: "Sign To Verify You Are The Wallet Owner",
      exp,
    })
  );

  try {
    const signature = await wallet.signMessage(encodedMessage);
    const pk = wallet.publicKey.toBase58();
    const msg = b58.encode(encodedMessage);
    const sig = b58.encode(signature);
    return `${pk}.${msg}.${sig}`;
  } catch {
    console.log("craPPPPP")
  }
 
};
