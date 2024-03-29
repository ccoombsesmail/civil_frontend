/*
 * Copyright (c) 2021 Elastos Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import axios from "axios";
import { DID, Logger, DefaultDIDAdapter, JSONObject, IDChainRequest } from "@elastosfoundation/did-js-sdk";
import { Exceptions } from "@elastosfoundation/did-js-sdk";
import { DIDRequest } from "./DIDRequest";
import { Entity } from "./Entity";

const log = new Logger("AssistDIDAdapter");
export class AssistDIDAdapter extends DefaultDIDAdapter {
  public static MAINNET_RPC_ENDPOINT = "https://assist.trinity-tech.io/v2";
  public static TESTNET_RPC_ENDPOINT = "https://assist-testnet.trinity-tech.io/v2";

  public static API_KEY = "IdSFtQosmCwCB9NOLltkZrFy5VqtQn8QbxBKQoHPw7zp3w0hDOyOYjgL53DO3MDH";

  private assistRpcEndpoint: string;

  public constructor(rpcEndpoint: string) {
    super(rpcEndpoint);

    switch (rpcEndpoint.toLowerCase()) {
      case "mainnet":
        this.assistRpcEndpoint = AssistDIDAdapter.MAINNET_RPC_ENDPOINT;
        break;

      case "testnet":
        this.assistRpcEndpoint = AssistDIDAdapter.TESTNET_RPC_ENDPOINT;
        break;

      default:
        break;
    }
  }

  private async postHttp(url: URL, body?: string, header?: Object): Promise<JSONObject> {
    let h: Object = Object.assign({}, header,
      {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `${AssistDIDAdapter.API_KEY}`
      });

    const res = await axios.post(url.toString(), body, {
      headers: h
    });
    const data = res.data
    return new Promise((res) => res(data))
  }

  // NOTE: synchronous HTTP calls are deprecated and wrong practice. Though, as JAVA SDK currently
  // mainly uses synchronous calls, we don't want to diverge our code from that. We then wait for the
  // "main" java implementation to rework synchronous calls and we will also migrate to Promises/Async.
  private async getRequest(url: URL, header?: Object): Promise<JSONObject> {
    let h: Object = Object.assign({}, header,
      {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `${AssistDIDAdapter.API_KEY}`
      });

    const res = await axios.get(url.toString(), {
      headers: h
    });
    const data = res.data
    return new Promise((res) => res(data))
  }

  public async createIdTransaction(payload: string, memo: string) {

    let headers = new Object();
    headers["Authorization"] = AssistDIDAdapter.API_KEY;
   
    if (payload == null || payload == "")
      throw new Exceptions.IllegalArgumentException("Invalid payload parameter");


    let request: AssistDIDAdapter.AssistDIDRequest = null;
    try {
      request = new AssistDIDAdapter.AssistDIDRequest(payload, memo);
    } catch (e) {
      throw new Exceptions.IllegalArgumentException("Invalid transaction payload", e);
    }

    let response: AssistDIDAdapter.AssistDIDResponse = null;
    try {
      let createDid = new URL(this.assistRpcEndpoint + "/didtx/create");
      let is = await this.postHttp(createDid, request.toString(), headers);
      response = new AssistDIDAdapter.AssistDIDResponse(is);
    } catch (e) {
      throw new Exceptions.DIDTransactionException("Access the Assist API error.", e);
    }

    if (response.meta.code != 200 || response.data.confirmationId == null)
      throw new Exceptions.DIDTransactionException("Asssit API error: " + response.meta.code
        + ", message: " + response.meta.message);

    try {
      let txStatus = new URL(this.assistRpcEndpoint + "/didtx/confirmation_id/" + response.data.confirmationId);
      let completed = false;
      while (completed == false) {
        let is = await this.getRequest(txStatus, headers);
        let statusResponse = new AssistDIDAdapter.AssistTxStatus(is);
        if (statusResponse.meta.code != 200 || statusResponse.data.status == null)
          throw new Exceptions.DIDTransactionException("Asssit API error: " + response.meta.code
            + ", message: " + response.meta.message);

        log.trace("DID transaction ---- status: " + statusResponse.data.status);

        switch (statusResponse.data.status) {
          case "Pending":
          case "Processing":
            await sleep(3000);
            continue;

          case "Quarantined":
          case "Error":
            throw new Exceptions.DIDTransactionException("DID transaction " +
              statusResponse.data.blockchainTxId + " is " +
              statusResponse.data.status);

          case "Completed":
            completed = true;
        }
      }
    } catch (e) {
      throw new Exceptions.DIDTransactionException("Access the Assist API error.", e);
    }
  }
}

export namespace AssistDIDAdapter {
  export class AssistDIDRequest extends Entity<AssistDIDRequest> {
    private did: DID; //"did"
    private memo: string; //"memo"
    private agent: string; // "requestFrom"
    private request: DIDRequest; // "didRequest"

    constructor(payload: string, memo: string) {
      super();
      this.request = DIDRequest.parse(payload);
      this.did = this.request.getDid();
      this.memo = memo == null ? "" : memo;
      this.agent = "DID command line utils";
    }

    public toJSON(key: string = null): JSONObject {
      let json: JSONObject = {};
      json.did = this.did.toString();
      json.memo = this.memo;
      json.requestFrom = this.agent;
      json.didRequest = this.request.toJSON();

      return json;
    }

    public fromJSON(json: JSONObject, context: DID = null): void {
      this.did = this.getDid("did", json.did, { mandatory: false, nullable: false, defaultValue: null });
      this.memo = this.getString("memo", json.memo, { mandatory: false, nullable: false });
      this.agent = this.getString("requestFrom", json.requestFrom, { mandatory: false, nullable: false });
      this.request = DIDRequest.parse(json.request as JSONObject);
    }
  }

  export class AssistDIDResponseMeta extends Entity<AssistDIDResponseMeta> {
    public code: number;  //"code"
    public message: string;     // "message"

    constructor(json: JSONObject) {
      super();
      this.code = this.getNumber("code", json.code, { mandatory: true, nullable: false });
      this.message = this.getString("message", json.message, { mandatory: true, nullable: false });
    }

    public toJSON(key: string = null): JSONObject {
      return {
        code: this.code,
        message: this.message
      }
    }

    public fromJSON(json: JSONObject, context: DID = null): void {
    }
  }

  export class AssistDIDResponseData extends Entity<AssistDIDResponseMeta> {
    public confirmationId: string; // "confirmation_id"
    public serviceCount: number;   // "service_count"
    public duplicate: boolean;     // "duplicate"

    constructor(json: JSONObject) {
      super();
      this.confirmationId = this.getString("confirmation_id", json.confirmation_id, { mandatory: true, nullable: false });
      this.serviceCount = this.getNumber("service_count", json.service_count, { mandatory: true, nullable: false });
      this.duplicate = this.getBoolean("duplicate", json.duplicate, { mandatory: true, nullable: false });
    }

    public toJSON(key: string = null): JSONObject {
      return {
        confirmation_id: this.confirmationId,
        service_count: this.serviceCount,
        duplicate: this.duplicate
      }
    }

    public fromJSON(json: JSONObject, context: DID = null): void { }
  }

  export class AssistDIDResponse extends Entity<AssistDIDResponse> {
    public meta: AssistDIDResponseMeta; //"meta"
    public data: AssistDIDResponseData; //"data"

    constructor(json: JSONObject) {
      super();
      this.meta = new AssistDIDResponseMeta(json.meta as JSONObject);
      this.data = new AssistDIDResponseData(json.data as JSONObject);
    }

    public toJSON(key: string = null): JSONObject {
      let json: JSONObject = {};

      json.meta = this.meta.toJSON();
      json.data = this.data.toJSON();
      return json;
    }

    public fromJSON(json: JSONObject, context: DID = null): void {
      this.meta = new AssistDIDResponseMeta(json.meta as JSONObject);
      this.data = new AssistDIDResponseData(json.data as JSONObject);
    }
  }

  export class AssistTxStatusData extends Entity<AssistTxStatusData>  {
    public id: string; //"id"
    public did: string; //"did"
    public agent: string; //"requestFrom"
    public status: string; //"status"
    public blockchainTxId: string; //"blockchainTxId"

    constructor(json: JSONObject) {
      super();
      this.id = this.getString("id", json.id, { mandatory: true, nullable: false });
      this.did = this.getString("did", json.did, { mandatory: true, nullable: false });
      this.agent = this.getString("requestFrom", json.requestFrom, { mandatory: true, nullable: false });
      this.status = this.getString("status", json.status, { mandatory: true, nullable: false });
      this.blockchainTxId = this.getString("blockchainTxId", json.blockchainTxId, { mandatory: false, nullable: true });
    }

    public toJSON(key: string = null): JSONObject {
      return {
        id: this.id,
        did: this.did,
        requestFrom: this.agent,
        status: this.status,
        blockchainTxId: this.blockchainTxId
      }
    }

    public fromJSON(json: JSONObject, context: DID = null): void { }
  }

  export class AssistTxStatus extends Entity<AssistTxStatus> {
    public meta: AssistDIDResponseMeta; //"meta"
    public data: AssistTxStatusData;    //"data"

    constructor(json: JSONObject) {
      super();
      this.meta = new AssistDIDResponseMeta(json.meta as JSONObject);
      this.data = new AssistTxStatusData(json.data as JSONObject);
    }

    public toJSON(key: string = null): JSONObject {
      let json: JSONObject = {};

      json.meta = this.meta.toJSON();
      json.data = this.data.toJSON();

      return json;
    }

    public fromJSON(json: JSONObject, context: DID = null): void { }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


