import axios from 'axios';
import { Subject } from 'rxjs';

import { Logger } from '../logger';
import { JSONObject } from '../model/json';
import { GlobalDIDSessionsService } from './global.didsessions.service';
import { GlobalIntentService } from './global.intent.service';
import { GlobalJsonRPCService } from './global.jsonrpc.service';
import { GlobalNetworksService, MAINNET_TEMPLATE, TESTNET_TEMPLATE } from './global.networks.service';
import { GlobalPreferencesService } from './global.preferences.service';
import { GlobalStorageService } from './global.storage.service';
import { GlobalSwitchNetworkService } from './global.switchnetwork.service';
import { GlobalThemeService } from './global.theme.service';

import {
  DID, DIDStore, DIDDocument, HDKey, DIDURL, IDChainRequest, RootIdentity, DIDBackend, DIDAdapter
} from '@elastosfoundation/did-js-sdk'
import internal from 'stream';


const assistAPIEndpoints = {
  MainNet: "https://assist-restapi.tuum.tech/v2",
  TestNet: "https://assist-testnet.trinity-tech.io/v2"
}; // Assist DID 2.0

//const assistAPIEndpoint = "https://wogbjv3ci3.execute-api.us-east-1.amazonaws.com/prod/v1"; // Assist V1 DID 1.0
const assistAPIKey = "IdSFtQosmCwCB9NOLltkZrFy5VqtQn8QbxBKQoHPw7zp3w0hDOyOYjgL53DO3MDH";

export type PersistentInfo = {
  did: {
    didString: string;
    publicationMedium: string, // assist, wallet
    publicationStatus: DIDPublicationStatus,

    assist?: {
      publicationID: string; // Unique publication ID returned by the assist API after a successful publication request. This is NOT a blockchain transaction ID.
      txId?: string; // After publishing a DID request to assist we save the returned txid here.
    },
    wallet?: {
      txId?: string; // After publishing a DID request to the EID chain we save the txid here.
      publicationTime?: number; // Unix timestamp seconds
    }
  },
}

export const enum DIDPublicationStatus {
  NO_ON_GOING_PUBLICATION = 0, // Initial state just before a publication is sent.
  AWAITING_PUBLICATION_CONFIRMATION = 1,
  PUBLISHED_AND_CONFIRMED = 2, // Previously published transaction was published and confirmed on chain.
  FAILED_TO_PUBLISH = 3
}

export type PublicationStatus = {
  didString: string;
  status: DIDPublicationStatus;
  txId?: string;
}

type PromisePersistentInfo = Promise<PersistentInfo>

abstract class DIDPublisher {
  public abstract publishDID(didString: string, payloadObject: any, memo: string, showBlockingLoader: boolean, parentIntentId?: number): Promise<PersistentInfo>;
  public abstract resetStatus();
}

/**
 * Scope: publish using assist API
 */
namespace AssistPublishing {
  type AssistBaseResponse = {
    meta: {
      code: number,
      message: string
    }
  }



  type AssistCreateTxResponse = AssistBaseResponse & {
    data: {
      data: {
        confirmation_id: string,
        service_count: number,
        duplicate: boolean
      },
      meta: {
        code: number,
        message: string
      }
    }
  }

  enum AssistTransactionStatus {
    PENDING = "Pending",
    PROCESSING = "Processing",
    COMPLETED = "Completed",
    QUARANTINED = "Quarantined",
    ERROR = "Error"
  }

  type AssistTransactionStatusResponse = AssistBaseResponse & {
    data: {
      id: string, // Confirmation ID as requested
      did: string, // DID, without did:elastos prefix
      requestFrom: string, // App package id of the requester
      didRequest: any, // Unhandled for now
      status: AssistTransactionStatus,
      memo: string,
      extraInfo: any, // Unhandled for now
      blockchainTxId: string,
      blockchainTx: any,
      created: string, // Creation date, in no clear format for now
      modified: string // Modification (?) date, in no clear format for now
    }
  }

  export class AssistPublisher extends DIDPublisher {
    constructor(
      private manager: DIDPublishingManager,
      private globalNetworksService: GlobalNetworksService) {
      super();
    }

    public async init(): Promise<void> {
    }

    /**
     * Directly publishes a payload previously generated in another part of the app.
     *
     * DOC FOR ASSIST API: https://github.com/tuum-tech/assist-restapi-backend#verify
     */
    public async publishDID(didString: string, payloadObject: any, memo: string, showBlockingLoader = false, parentIntentId?: number): Promise<PersistentInfo> {
      Logger.log("publicationservice", "Requesting identity publication to Assist", didString);

      if (typeof payloadObject === "string")
        throw new Error("Payload must be a JSON object, not a stringified JSON");

      this.manager.persistentInfo.did.didString = didString;
      this.manager.persistentInfo.did.publicationStatus = DIDPublicationStatus.NO_ON_GOING_PUBLICATION;
      await this.manager.savePersistentInfoAndEmitStatus(this.manager.persistentInfo);

      const assistAPIKey = "IdSFtQosmCwCB9NOLltkZrFy5VqtQn8QbxBKQoHPw7zp3w0hDOyOYjgL53DO3MDH";

      const requestBody = {
        "did": didString,
        "memo": memo || "",
        "requestFrom": "Charles",
        "didRequest": payloadObject
      };
      Logger.log("publicationservice", "Assist API request body:", requestBody, JSON.stringify(requestBody));

      let h: Object = Object.assign({},
        {
          "Content-Type": "application/json",
          'Authorization': assistAPIKey
        });



      try {
        let assistAPIEndpoint = await this.getAssistEndpoint();
        let response: AssistCreateTxResponse = await axios.post(assistAPIEndpoints.MainNet + "/didtx/create", requestBody, {
          headers: h
        }) as AssistCreateTxResponse;

        Logger.log("publicationservice", "Assist successful response:", response);
        if (response && response.data.meta.code == 200 && response.data.data.confirmation_id) {
          Logger.log("publicationservice", "All good, DID has been submitted. Now waiting.");

          this.manager.persistentInfo.did.publicationStatus = DIDPublicationStatus.AWAITING_PUBLICATION_CONFIRMATION;
          this.manager.persistentInfo.did.assist.publicationID = response.data.data.confirmation_id;
          await this.manager.savePersistentInfoAndEmitStatus(this.manager.persistentInfo);

          await this.checkPublicationStatusAndUpdate();
          const pubStatusPromise = new Promise((res) => {
            const timer = setInterval(() => {
              if (this.manager.persistentInfo.did.publicationStatus == DIDPublicationStatus.PUBLISHED_AND_CONFIRMED) {
                clearInterval(timer)
                res(this.manager.persistentInfo)
              }
            }, 1000)
          })
          return pubStatusPromise as PromisePersistentInfo
        } else {
          let error = "Successful response received from the assist API, but response can't be understood";
          throw error;
        }
      }
      catch (err) {
        Logger.log("publicationservice", "Assist publish api error:", err);
        this.manager.persistentInfo.did.publicationStatus = DIDPublicationStatus.FAILED_TO_PUBLISH;
        await this.manager.savePersistentInfoAndEmitStatus(this.manager.persistentInfo);
      }
    }

    /**
     * Computes the right assist api endpoint according to current active network in settings.
     */
    private async getAssistEndpoint(): Promise<string> {
      let activeNetworkTemplate: string = null;

      if (!GlobalDIDSessionsService.signedInDIDString) {
        // No active user? Use mainnet
        activeNetworkTemplate = MAINNET_TEMPLATE;
      }
      else {
        activeNetworkTemplate = await this.globalNetworksService.getActiveNetworkTemplate();
      }
      
      switch (activeNetworkTemplate) {
        case MAINNET_TEMPLATE:
          return assistAPIEndpoints.MainNet;
        case TESTNET_TEMPLATE:
          return assistAPIEndpoints.TestNet;
        default:
          throw new Error("Assist service cannot be used to published on network " + activeNetworkTemplate);
      }
    }

    /**
    * Checks the publication status on the assist API, for a previously saved ID.
    */
    private checkPublicationStatusAndUpdate(): Promise<void> {
      // Stop checking status if not awaiting anything.
      if (this.manager.persistentInfo.did.publicationStatus !== DIDPublicationStatus.AWAITING_PUBLICATION_CONFIRMATION)
        return;

      // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        Logger.log("publicationservice", "Requesting identity publication status to Assist for confirmation ID " + this.manager.persistentInfo.did.assist.publicationID);

        let h: Object = Object.assign({},
          {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': assistAPIKey
          });

        let assistAPIEndpoint = await this.getAssistEndpoint();
        try {
          let res = await axios.get(assistAPIEndpoints.MainNet + "/didtx/confirmation_id/" + this.manager.persistentInfo.did.assist.publicationID, {
            headers: h
          })
          const response = { ...res, ...res.data } as AssistTransactionStatusResponse
          Logger.log("publicationservice", "Assist successful response:", response);
          if (response && response.meta && response.meta.code == 200 && response.data.status) {
            Logger.log("publicationservice", "All good, We got a clear status from the assist api:", response.data.status);

            if (response.data.status == AssistTransactionStatus.PENDING || response.data.status == AssistTransactionStatus.PROCESSING) {
              // Transaction is still pending, we do nothing, just wait and retry later.
              Logger.log("publicationservice", "Publication is still pending / processing / not confirmed.");

              // Don't save or emit for now, this will be sent when we get another useful (completed/failed) event later.
              if (response.data.blockchainTxId)
                this.manager.persistentInfo.did.assist.txId = response.data.blockchainTxId;
            }
            else if (response.data.status == AssistTransactionStatus.QUARANTINED) {
              // Blocking issue. This publication was quarantined, there is "something wrong somewhere".
              // So to make things more reliable, we just delete everything and restart the process
              // from scratch.
              Logger.log("publicationservice", "Publication request was quarantined! Deleting the identity and trying again.");
              this.manager.persistentInfo.did.publicationStatus = DIDPublicationStatus.FAILED_TO_PUBLISH;
              await this.manager.savePersistentInfoAndEmitStatus(this.manager.persistentInfo);
            }
            else if (response.data.status == AssistTransactionStatus.COMPLETED) {
              this.manager.persistentInfo.did.publicationStatus = DIDPublicationStatus.PUBLISHED_AND_CONFIRMED;
              // HERE
              await this.manager.savePersistentInfoAndEmitStatus(this.manager.persistentInfo);
              return this.manager.persistentInfo
            }
            else {
              // Logger.error("publicationservice", "Unhandled transaction status received from assist:", response.data.status);
              this.manager.persistentInfo.did.publicationStatus = DIDPublicationStatus.FAILED_TO_PUBLISH;
              await this.manager.savePersistentInfoAndEmitStatus(this.manager.persistentInfo);
            }

            setTimeout(async () => {
              await this.checkPublicationStatusAndUpdate();
            }, 1000);

            resolve();
          } else {
            let error = "Successful response received from the assist API, but response can't be understood";
            Logger.log("publicationservice", "Assist api call error:", error);

            this.manager.persistentInfo.did.publicationStatus = DIDPublicationStatus.FAILED_TO_PUBLISH;
            await this.manager.savePersistentInfoAndEmitStatus(this.manager.persistentInfo);

            resolve();
          }
        } catch {

          this.manager.persistentInfo.did.publicationStatus = DIDPublicationStatus.FAILED_TO_PUBLISH;
          await this.manager.savePersistentInfoAndEmitStatus(this.manager.persistentInfo);

          resolve();
        }
      });
    }

    public resetStatus() { }
  }
}

type EIDRPCRequest = {
  jsonrpc: "2.0",
  method: string,
  params: unknown[]
  id: number
};

type DIDResolveRequest = EIDRPCRequest & {
  method: "did_resolveDID",
  params: [{
    did: string,
    all?: boolean
  }]
};

type EIDChainResolveResponse = {
  did: string, // did:elastos:xxx
  status: 0,
  transaction: [
    {
      "txid": string,
      "timestamp": string, // ISO date
      // "operation": Unused
    }
  ]
}

/**
 * Scope: publish using the wallet
 */
class DIDPublishingManager {
  public persistentInfo: PersistentInfo = null;

  private assistPublisher: AssistPublishing.AssistPublisher = null;
  private activePublisher: DIDPublisher = null;

  constructor(
    private publicationService: GlobalPublicationService,
    private jsonRPC: GlobalJsonRPCService,
    private storage: GlobalStorageService,
    private theme: GlobalThemeService,
    private prefs: GlobalPreferencesService,
    private globalNetworksService: GlobalNetworksService,
    private globalIntentService: GlobalIntentService,
    private globalSwitchNetworkService: GlobalSwitchNetworkService) { }

  public async init(): Promise<void> {
    this.persistentInfo = await this.loadPersistentInfo();

    this.assistPublisher = new AssistPublishing.AssistPublisher(
      this,
      this.globalNetworksService);


    await this.assistPublisher.init();
  }

  private async loadPersistentInfo(): Promise<PersistentInfo> {
    let infoAsString = await this.storage?.getSetting(GlobalDIDSessionsService.signedInDIDString, 'publicationservice', "persistentInfo", null);
    if (!infoAsString)
      return this.createNewPersistentInfo();

    return JSON.parse(infoAsString);
  }

  public createNewPersistentInfo(): PersistentInfo {
    return {
      did: {
        didString: null,
        publicationMedium: null,
        publicationStatus: DIDPublicationStatus.NO_ON_GOING_PUBLICATION,
        assist: {
          publicationID: null
        }
      }
    }
  }

  public async savePersistentInfo(persistentInfo: PersistentInfo) {
    this.persistentInfo = persistentInfo;
    await this.storage?.setSetting(GlobalDIDSessionsService.signedInDIDString, 'publicationservice', "persistentInfo", JSON.stringify(persistentInfo));
  }

  public async savePersistentInfoAndEmitStatus(persistentInfo: PersistentInfo) {
    //console.log("DEBUG savePersistentInfoAndEmitStatus", persistentInfo);
    await this.savePersistentInfo(persistentInfo);
    this.emitPublicationStatusChangeFromPersistentInfo();
  }

  /**
  * Emit a public publication status event that matches the current persistent info state.
  */
  public emitPublicationStatusChangeFromPersistentInfo() {
    //console.log("DEBUG emitPublicationStatusChangeFromPersistentInfo", this.persistentInfo);

    let txId: string;
    if (this.persistentInfo.did.assist && this.persistentInfo.did.assist.txId)
      txId = this.persistentInfo.did.assist.txId;

    this.publicationService.publicationStatus?.next({
      didString: this.persistentInfo.did.didString,
      status: this.persistentInfo.did.publicationStatus,
      txId: txId || null
    });
  }

  public async resetStatus() {
    if (this.activePublisher)
      await this.activePublisher.resetStatus();

    this.persistentInfo = this.createNewPersistentInfo();
    await this.savePersistentInfoAndEmitStatus(this.persistentInfo);
  }

  /**
   * Returns the medium (assist, wallet) that we should use to publish
   */
  private async getPublishingMedium(): Promise<string> {
    if (!GlobalDIDSessionsService.signedInDIDString)
      return 'assist'; // No signed in user? We may be in a DID creation flow. Anyway, use assist in this case.

    return await this.prefs.getPublishIdentityMedium(GlobalDIDSessionsService.signedInDIDString);
  }

  public async publishDIDFromRequest(didString: string, payloadObject: JSONObject, memo: string, showBlockingLoader = false, parentIntentId?: number): Promise<PersistentInfo> {
    await this.init()
    this.activePublisher = this.assistPublisher;

    return this.activePublisher.publishDID(didString, payloadObject, memo, showBlockingLoader, parentIntentId);
  }

}

export class GlobalPublicationService {
  public static instance: GlobalPublicationService = null;

  private manager: DIDPublishingManager = null;

  public publicationStatus: Subject<PublicationStatus> = null;


  constructor(
    private storage: GlobalStorageService,
    private jsonRPC: GlobalJsonRPCService,
    private theme: GlobalThemeService,
    private prefs: GlobalPreferencesService,
    private globalNetworksService: GlobalNetworksService,
    private globalIntentService: GlobalIntentService,
    private globalSwitchNetworkService: GlobalSwitchNetworkService
  ) {
    GlobalPublicationService.instance = this;

    this.manager = new DIDPublishingManager(
      this,
      this.jsonRPC,
      this.storage,
      this.theme,
      this.prefs,
      this.globalNetworksService,
      this.globalIntentService,
      this.globalSwitchNetworkService);
  }

  public async init(): Promise<void> {
    await this.manager.init();
    this.publicationStatus = new Subject<PublicationStatus>();

  }


  /**
   * Publish the given DID Request.
   */
  public publishDIDFromRequest(didString: string, payloadObject: JSONObject, memo: string, showBlockingLoader = false, parentIntentId?: number): Promise<PersistentInfo> {
    return this.manager.publishDIDFromRequest(didString, payloadObject, memo, showBlockingLoader, parentIntentId);
  }

  /**
   * Opens a DID store, generates a DID request and publish it.
  //  */
  // public publishDIDFromStore(storeId: string, storePass: string, didString: string, showBlockingLoader = false, parentIntentId?: number): Promise<void> {
  //   Logger.log("publicationservice", "Starting the DID publication process");

  //   // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
  //   return new Promise<void>(async (resolve, reject) => {
  //     // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
  //     const didStore = await this.openDidStore(storeId, async (payload: string, memo: string) => {
  //       // Callback called by the DID SDK when trying to publish a DID.
  //       Logger.log("publicationservice", "Create ID transaction callback is being called", payload, memo);
  //       const payloadAsJson = JSON.parse(payload);
  //       // TODO: Identiy will showLoading when publish did. we can improve it.
  //       await this.publishDIDFromRequest(didString, payloadAsJson, memo, showBlockingLoader, parentIntentId);
  //       resolve();
  //     });

  //     const localDIDDocument = await this.loadLocalDIDDocument(didStore, didString);
  //     if (localDIDDocument) {
  //       // Start the publication flow
  //       localDIDDocument.publish(storePass, didString, (err) => {
  //         // Local "publish" process errored
  //         Logger.log("publicationservice", "Local DID Document publish(): error", err);
  //         reject(err);
  //       });
  //     }
  //     else {
  //       // Weird, the DID we've just created could not be loaded... Let user know anyway
  //       reject("Failed to load DID document for DID " + didString + " in store id " + didStore.getId());
  //     }
  //   });
  // }

  public resetStatus(): Promise<void> {
    return this.manager.resetStatus();
  }

  // private openDidStore(storeId: string, createIdTransactionCallback: DIDPlugin.OnCreateIdTransaction): Promise<DIDStore> {
  //   return new Promise((resolve) => {
  //     didManager.initDidStore(storeId, createIdTransactionCallback, (didstore) => {
  //       resolve(didstore);
  //     }, (err) => {
  //       resolve(null);
  //     });
  //   });
  // }

  private loadLocalDIDDocument(didStore: DIDStore, didString: string): Promise<DIDDocument> {
    return didStore.loadDid(didString)
  }
}

