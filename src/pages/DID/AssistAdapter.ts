import { DID, Logger, DefaultDIDAdapter, JSONObject } from "@elastosfoundation/did-js-sdk";
import { Exceptions } from "@elastosfoundation/did-js-sdk";
// import { OutgoingHttpHeaders } from "http2";
// import { request as httpRequest } from "http";
// import { request as httpsRequest } from "https";
import axios from "axios";
import { DIDRequest } from "./DIDRequest";
import { Entity } from "./Entity";

const log = new Logger("AssistDIDAdapter");

export class AssistDIDAdapter extends DefaultDIDAdapter {
  private static MAINNET_RPC_ENDPOINT = "https://assist-restapi.tuum.tech/v2";
  private static TESTNET_RPC_ENDPOINT = "https://assist-restapi-testnet.tuum.tech/v2";

  private static API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNoYXJsZXMxMjMiLCJpYXQiOjE2NDgwMjU2MTEsImV4cCI6MzI5NjQxMTIyMiwiaXNzIjoiZGlkOmVsYXN0b3M6aW14TmtoS3V1WGFlZnlGS1F1ekZua2ZSZGVkRFZMWW1LViJ9.zwotC7M9ecwGsjcWvKYrzJzKHFt3ZO1EDxxRF13XGpE";
  private static API_KEY_MAINET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNoYXJsZXMtbWFpbm5ldCIsImlhdCI6MTY0ODEwNjY2MSwiZXhwIjozMjk2NTczMzIyLCJpc3MiOiJkaWQ6ZWxhc3RvczppbXhOa2hLdXVYYWVmeUZLUXV6Rm5rZlJkZWREVkxZbUtWIn0.ZXTWVg_06cv5cFSI07bOjMrU1p07UQCDjvEvYMO9DWw"
  private assistRpcEndpoint: string


  public constructor(rpcEndpoint: string) {
    super(rpcEndpoint)

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


    // Use a different module if we call http or https
    let h: Object = Object.assign({}, header,
      {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `Bearer ${AssistDIDAdapter.API_KEY_MAINET}`
      });

    const res = await axios.post(url.toString(), body, {
      headers: h
    });
    const data = res.data
    return new Promise((res) => res(data))

  }

  public async getRequest(url: URL, header?: Object): Promise<JSONObject> {
    // Use a different module if we call http or https
    let h: Object = Object.assign({}, header,
      {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `Bearer ${AssistDIDAdapter.API_KEY_MAINET}`
      });

    const res = await axios.get(url.toString(), {
      headers: h
    });
    const data = res.data
    return new Promise((res) => res(data))
  }

  public async createIdTransaction(payload: string, memo: string) {
    if (payload == null || payload == "")
      throw new Exceptions.IllegalArgumentException("Invalid payload parameter");

    let headers = Object.assign({}, { Authorization: `Bearer ${AssistDIDAdapter.API_KEY_MAINET}` });


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
      const data = is.data as any
      const didTx = data.didTx
      response = new AssistDIDAdapter.AssistDIDResponse({ data: didTx as JSONObject, meta: is.meta });
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
        const data = is.data as any
        const didTx = data.didTx
        console.log(is)
        let statusResponse = new AssistDIDAdapter.AssistTxStatus({ data: didTx as JSONObject, meta: is.meta });
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
    // private agent: string; // "requestFrom"
    private request: DIDRequest; // "didRequest"

    constructor(payload: string, memo: string) {
      super();
      this.request = DIDRequest.parse(payload);
      this.did = this.request.getDid();
      this.memo = memo == null ? "Test MEMO123" : memo;
      // this.agent = "DID command line utils";
    }

    public toJSON(key: string = null): JSONObject {
      let json: JSONObject = {};
      json.did = this.did.toString();
      json.memo = this.memo;
      // json.requestFrom = this.agent;
      json.didRequest = this.request.toJSON();

      return json;
    }

    public fromJSON(json: JSONObject, context: DID = null): void {
      this.did = this.getDid("did", json.did, { mandatory: false, nullable: false, defaultValue: null });
      this.memo = this.getString("memo", json.memo, { mandatory: false, nullable: false });
      // this.agent = this.getString("requestFrom", json.requestFrom, { mandatory: false, nullable: false });
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
      this.confirmationId = this.getString("confirmationId", json.confirmationId, { mandatory: true, nullable: false });
      // this.serviceCount = this.getNumber("service_count", json.service_count, { mandatory: true, nullable: false });
      // this.duplicate = this.getBoolean("duplicate", json.duplicate, { mandatory: true, nullable: false });
    }

    public toJSON(key: string = null): JSONObject {
      return {
        confirmationId: this.confirmationId,
        // service_count: this.serviceCount,
        // duplicate: this.duplicate
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
    public _id: string; //"id"
    public did: string; //"did"
    // public agent: string; //"requestFrom"
    public status: string; //"status"
    public blockchainTxId: string; //"blockchainTxId"

    constructor(json: JSONObject) {
      super();
      this._id = this.getString("_id", json._id, { mandatory: true, nullable: false });
      this.did = this.getString("did", json.did, { mandatory: true, nullable: false });
      // this.agent = this.getString("requestFrom", json.requestFrom, { mandatory: true, nullable: false });
      this.status = this.getString("status", json.status, { mandatory: true, nullable: false });
      this.blockchainTxId = this.getString("blockchainTxId", json.blockchainTxId, { mandatory: false, nullable: true });
    }

    public toJSON(key: string = null): JSONObject {
      return {
        id: this._id,
        did: this.did,
        // requestFrom: this.agent,
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

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}