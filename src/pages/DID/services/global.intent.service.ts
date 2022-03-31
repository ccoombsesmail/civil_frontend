import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '../logger';


type QueuedIntent = {
  status: "created" | "submitted" | "processing"; // "created" means queued, but not executed yet. "submitted" means sent to the native intent manager. "processing" means sent inside essentials and not finished yet (no response).
  parentIntentId?: number; // If this intent is sent from inside a parent inside, that parent intent id is saved here.
}

@Injectable({
  providedIn: 'root'
})
export class GlobalIntentService {
  public static instance: GlobalIntentService;

  // Queue of intents to be handled. If an intent is received while another one is still in progress
  // then it is queued and processed later.
  private intentsQueue: QueuedIntent[] = [];
  private intentJustCreated: QueuedIntent = null; // Intent just created and not processed yet
  private intentsBeingProcessed: QueuedIntent[] = [];
  private unprocessedIntentInterval: any = null; // Warning timeout when an intent did not send any response

  // Emits received intents from the app manager.
  constructor(
  ) {
    GlobalIntentService.instance = this;
  }

  public init() {
    Logger.log("Intents", "Global intent service is initializing");
  }

  // Clear the intent when signout.
  public clear() {
  }

  public listen() {
    Logger.log("Intents", "Listening to external incoming intents");
      // Find the related queued intent that has a "created" status and update it.
      let queuedIntent: QueuedIntent = null;
      if (this.intentJustCreated) {
        // Intent created by essentials just now
        queuedIntent = this.intentJustCreated;
        queuedIntent.status = "submitted";
        this.intentJustCreated = null;
      }
      else {
        // Intent received from the external world. Essentials' sendIntent() has not been called first.
        queuedIntent = {
          status: "submitted",
        };
        this.intentsQueue.push(queuedIntent);
      }
  }

  /**
   * The next processable intent is:
   * - The first intent in the queue, if there is currently no intent being processed
   * - Or, the first intent in the queue that has a parent id that is currently being processed.
   */
  private findProcessableIntent(): QueuedIntent {
    // Nothing to process
    if (this.intentsQueue.length === 0)
      return null;

    if (this.intentsBeingProcessed.length === 0) {
      Logger.log("intents", "Next processable intent is a root intent (no parent)");
      // Currently no intent being process, so we take the first one in the queue
      return this.intentsQueue[0]; // First item in the queue
    }
    else {
      // Already some intents being processed
      let rootIntentBeingProcessed = this.intentsBeingProcessed.find(i => !i.parentIntentId); // There should be always one, and only one root item
      Logger.log("intents", "Root intent being processed:", rootIntentBeingProcessed);
    }
  }

  /**
   * Sends an intent with optional params.
   * If an intent wants to be able to call a sub-intent (ie: voting calling the wallet to publish a transaction),
   * the parentIntentId must be given so that the intent manager allows the execution of this sub-intent before
   * the parent intent sends its response (imbricated intents can't await for linear responses).
   */
  async sendIntent(action: string, params?: any, parentIntentId?: number): Promise<any> {
    // Can not show the data. Private data, confidential. eg. mnemonic.
    Logger.log("Intents", "Sending intent", action, parentIntentId);

    // Add to intent queue After sendurlintent succeeds
    // Filter out special intent actions such as openurl, that will never get any answer as they
    // are handled by the native code, not by essentials.
    if (action !== "openurl") {
      this.intentJustCreated = {
        status: "created",
        parentIntentId
      }
      this.intentsQueue.push(this.intentJustCreated);
    }

  }

  async sendUrlIntent(url: string, parentIntentId?: number): Promise<any> {
    Logger.log("Intents", "Sending url intent", url, parentIntentId);

    this.intentJustCreated = {
      status: "created",
      parentIntentId
    }
    this.intentsQueue.push(this.intentJustCreated);
  }

  private processNextIntentRequest() {
    Logger.log("Intents", "Processing next intent with remaining items in queue:", this.intentsQueue.length);

    let nextProcessableIntent = this.findProcessableIntent();
    if (nextProcessableIntent) {
      Logger.log("Intents", "Intent processing starting. Sending to listeners", nextProcessableIntent);
      nextProcessableIntent.status = "processing";
      this.intentsBeingProcessed.push(nextProcessableIntent);

      if (!this.unprocessedIntentInterval) {
        this.unprocessedIntentInterval = setInterval(() => {
          Logger.warn("Intents", "No intent response sent after several seconds!", this.intentsBeingProcessed);
        }, 20000);
      }

    }
  }

  /**
   * Among the list of intents currently BEING processed (one root intent, and potential children
   * intents), returns the last one started (the deepest child).
   */
  /* public getMostRecentBeingProcessedIntent(): QueuedIntent {

  } */

  async sendIntentResponse(result: any, intentId: number, navigateBack = true): Promise<void> {
    // Can not show the data in logs. Private data, confidential. eg. mnemonic.
    Logger.log("Intents", "Sending intent response ", intentId, navigateBack);

    // Find the processing intent in the list and clear it
    if (this.intentsBeingProcessed.length === 0) {
      clearInterval(this.unprocessedIntentInterval);
      this.unprocessedIntentInterval = null;
    }
    // Make sure that the result is JSON data. This is the only format we want to support.
    try {
      JSON.stringify(result);
    }
    catch (e) {
      Logger.error("Intents", "Intent response error", e);
      this.processNextIntentRequest();
      throw new Error("sendIntentResponse() error: Result data is not a valid JSON object");
    }

    // If we have an active connection to a connectivity SDK, we send the connection token back
    // as well as part of the intent result, so the server can match this response to the original
    // Request.
    //
    // TODO: careful when some day several websites connect to essentials at the same time, we
    // have to handle multiple instances and save which WS socket instance has received the intent
    // request!
    //if (GlobalConnectService.instance.getActiveConnectionToken())
    //  result["connectionToken"] = GlobalConnectService.instance.getActiveConnectionToken();

    this.processNextIntentRequest();
  }
}
