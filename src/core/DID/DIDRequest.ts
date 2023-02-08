// import { Buffer } from "buffer";
import { BASE64, DID, DIDDocument, JSONObject, IDChainRequest, DIDURL, TransferTicket, Exceptions } from "@elastosfoundation/did-js-sdk";

/**
 * The DID request class.
 */
export class DIDRequest extends IDChainRequest<DIDRequest> {
    private did: DID;
    private doc: DIDDocument;
    private signer: String

    public static newWithOperation(operation: IDChainRequest.Operation): DIDRequest {
        let didRequest = new DIDRequest();
        didRequest.constructWithOperation(operation);
        return didRequest;
    }

    private static newWithPreviousTxId(operation: IDChainRequest.Operation, previousTxid: string): DIDRequest {
        let didRequest = new DIDRequest();
        didRequest.constructWithPreviousTxId(operation, previousTxid);
        return didRequest;
    }

    private static newWithTransferTicket(operation: IDChainRequest.Operation, ticket: TransferTicket): DIDRequest {
        let didRequest = new DIDRequest();
        didRequest.constructWithTransferTicket(operation, ticket);
        return didRequest;
    }

    protected static newWithDIDRequest(request: DIDRequest) {
        let didRequest = new DIDRequest();
        didRequest.constructWithIDChainRequest(request);
        didRequest.did = request.did;
        didRequest.doc = request.doc;
    }

    /**
     * Constructs the 'create' DID Request.
     *
     * @param doc the DID Document be packed into Request
     * @param signKey the key to sign Request
     * @param storepass the password for DIDStore
     * @return the IDChainRequest object
     * @throws DIDStoreException there is no store to attach.
     */
    public static async create(doc: DIDDocument, signKey: DIDURL, storepass: string): Promise<DIDRequest> {
        let request = DIDRequest.newWithOperation(IDChainRequest.Operation.CREATE);
        request.setPayload(doc);
        try {
            await request.seal(signKey, storepass);
        } catch (ignore) {
            // MalformedIDChainRequestException
            throw new Exceptions.UnknownInternalException(ignore);
        }

        return request;
    }

    /**
     * Constructs the 'update' DID Request.
     *
     * @param doc the DID Document be packed into Request
     * @param previousTxid the previous transaction id string
     * @param signKey the key to sign Request
     * @param storepass the password for DIDStore
     * @return the IDChainRequest object
     * @throws DIDStoreException there is no store to attach.
     */
    public static async update(doc: DIDDocument, previousTxid: string, signKey: DIDURL, storepass: string): Promise<DIDRequest> {
        let request = DIDRequest.newWithPreviousTxId(IDChainRequest.Operation.UPDATE, previousTxid);
        request.setPayload(doc);
        try {
            await request.seal(signKey, storepass);
        } catch (ignore) {
            // MalformedIDChainRequestException
            throw new Exceptions.UnknownInternalException(ignore);
        }

        return request;
    }

    constructWithOperation(operation) {
      this.header = IDChainRequest.Header.newWithPreviousTxId(operation, null);
    }

    static newWithOperationVC(operation) {
      let credentialRequest = new DIDRequest();
      credentialRequest.constructWithOperation(operation);
      return credentialRequest;
    }


  static declare(vc, signer, signKey, storepass) {
      return new Promise((res, rej) => {
          let request = this.newWithOperationVC(IDChainRequest.Operation.DECLARE);
          request.setPayload(vc);
          request.signer = signer;
          try {
              request.seal(signKey, storepass);
          }
          catch (ignore) {
              throw new Error(ignore);
          }
          return request;
      });
  }

    /**
     * Constructs the 'transfer' DID Request.
     *
     * @param doc target DID document
     * @param ticket the transfer ticket object
     * @param signKey the key to sign Request
     * @param storepass the password for DIDStore
     * @return the IDChainRequest object
     * @throws DIDStoreException there is no store to attach.
     */
    public static async transfer(doc: DIDDocument, ticket: TransferTicket, signKey: DIDURL, storepass: string): Promise<DIDRequest> {
        let request = DIDRequest.newWithTransferTicket(IDChainRequest.Operation.TRANSFER, ticket);
        request.setPayload(doc);
        try {
            await request.seal(signKey, storepass);
        } catch (ignore) {
            // MalformedIDChainRequestException
            throw new Exceptions.UnknownInternalException(ignore);
        }

        return request;
    }

    /**
     * Constructs the 'deactivate' DID Request.
     *
     * @param doc the DID Document be packed into Request
     * @param signKey the key to sign Request
     * @param storepass the password for DIDStore
     * @return the IDChainRequest object
     * @throws DIDStoreException there is no store to attach.
     */
    public static async deactivate(doc: DIDDocument, signKey: DIDURL, storepass: string): Promise<DIDRequest> {
        let request = DIDRequest.newWithOperation(IDChainRequest.Operation.DEACTIVATE);
        request.setPayload(doc);
        try {
            await request.seal(signKey, storepass);
        } catch (ignore) {
            // MalformedIDChainRequestException
            throw new Exceptions.UnknownInternalException(ignore);
        }

        return request;
    }

    /**
     * Constructs the 'deactivate' DID Request.
     *
     * @param target the DID to be deactivated
     * @param targetSignKey the target DID's key to sign
     * @param doc the authorizer's document
     * @param signKey the key to sign Request
     * @param storepass the password for DIDStore
     * @return the IDChainRequest object
     * @throws DIDStoreException there is no store to attach
     */
    // NOTE: Also deactivate() in Java
    public static async deactivateTarget(target: DIDDocument, targetSignKey: DIDURL, doc: DIDDocument, signKey: DIDURL, storepass: string): Promise<DIDRequest> {
        let request = DIDRequest.newWithOperation(IDChainRequest.Operation.DEACTIVATE);
        request.setPayload(target);
        try {
            await request.sealTarget(targetSignKey, doc, signKey, storepass);
        } catch (ignore) {
            // MalformedIDChainRequestException
            throw new Exceptions.UnknownInternalException(ignore);
        }

        return request;
    }

    /**
     * Get previous transaction id string.
     *
     * @return the transaction id string
     */
    public getPreviousTxid(): string {
        return this.getHeader().getPreviousTxid();
    }

    /**
     * Get transfer ticket object.
     *
     * @return the TransferTicket object
     */
    public async getTransferTicket(): Promise<TransferTicket> {
        return this.getHeader().getTransferTicket();
    }

    /**
     * Get target DID of DID Request.
     *
     * @return the DID object
     */
    public getDid(): DID {
        return this.did;
    }

    /**
     * Get DID Document of DID Request.
     *
     * @return the DIDDocument object
     */
    public getDocument(): DIDDocument {
        return this.doc;
    }

    public setPayload(docOrString: DIDDocument | string) {
        if (docOrString instanceof DIDDocument) {
            this.doc = docOrString;
            this.did = this.doc.getSubject();

            if (!this.getHeader().getOperation().equals(IDChainRequest.Operation.DEACTIVATE)) {
                let json = this.doc.toString(true);
                let jsonBuffer = Buffer.from(json, "utf-8")
                this.setPayload(BASE64.fromString(jsonBuffer.toString()));
            } else {
                super.setPayload(this.doc.getSubject().toString());
            }
        }
        else {
            super.setPayload(docOrString);
        }
    }

    protected sanitize(): void {
        let header = this.getHeader();

        if (header == null)
            throw new Exceptions.MalformedIDChainRequestException("Missing header");

        if (header.getSpecification() == null)
            throw new Exceptions.MalformedIDChainRequestException("Missing specification");

        if (header.getSpecification() !== DIDRequest.DID_SPECIFICATION && header.getSpecification() !== DIDRequest.CREDENTIAL_SPECIFICATION)
            throw new Exceptions.MalformedIDChainRequestException("Unsupported specification");

        let operation = header.getOperation();
        if (operation.equals(IDChainRequest.Operation.CREATE)) { }
        else if (operation.equals(IDChainRequest.Operation.UPDATE)) {
            if (header.getPreviousTxid() == null || header.getPreviousTxid() === "")
                throw new Exceptions.MalformedIDChainRequestException("Missing previousTxid");
        }
        else if (operation.equals(IDChainRequest.Operation.TRANSFER)) {
            if (header.getTicket() == null || header.getTicket() === "")
                throw new Exceptions.MalformedIDChainRequestException("Missing ticket");
        }
        else if (operation.equals(IDChainRequest.Operation.DEACTIVATE)) {
        }
        else if (operation.equals(IDChainRequest.Operation.DECLARE)) {

        }
        else {
            throw new Exceptions.MalformedIDChainRequestException("Invalid operation " + header.getOperation().toString());
        }

        let payload = this.getPayload();
        if (payload == null || payload === "")
            throw new Exceptions.MalformedIDChainRequestException("Missing payload");

        let proof = this.getProof();
        if (proof == null)
            throw new Exceptions.MalformedIDChainRequestException("Missing proof");

        try {
            if (!header.getOperation().equals(IDChainRequest.Operation.DEACTIVATE)) {
                let json = BASE64.toString(payload)
                this.doc = DIDDocument._parseOnly(json); // CHECKME: !!!
                this.did = this.doc.getSubject();
            } else {
                this.did = new DID(payload);
            }
        } catch (e) {
            // DIDException
            throw new Exceptions.MalformedIDChainRequestException("Invalid payload", e);
        }

        proof.qualifyVerificationMethod(this.did);
    }

    private async seal(signKey: DIDURL, storepass: string): Promise<void> {
        if (!this.doc.isAuthenticationKey(signKey))
            throw new Exceptions.InvalidKeyException("Not an authentication key.");

        if (this.getPayload() == null || this.getPayload() === "")
            throw new Exceptions.MalformedIDChainRequestException("Missing payload");

        let signature = await this.doc.signWithId(signKey, storepass, ...this.getSigningInputs());
        this.setProof(new DIDRequest.Proof(signKey, signature));
    }

    // NOTE: Also seal() in Java
    private async sealTarget(targetSignKey: DIDURL, doc: DIDDocument, signKey: DIDURL, storepass: string): Promise<void> {
        if (!this.doc.isAuthorizationKey(targetSignKey))
            throw new Exceptions.InvalidKeyException("Not an authorization key: " + targetSignKey);

        if (!doc.isAuthenticationKey(signKey))
            throw new Exceptions.InvalidKeyException("Not an authentication key: " + signKey);

        if (!this.getPayload() || this.getPayload() == null)
            throw new Exceptions.MalformedIDChainRequestException("Missing payload");

        let signature = await doc.signWithId(signKey, storepass, ...this.getSigningInputs());
        this.setProof(new DIDRequest.Proof(targetSignKey, signature));
    }

    protected async getSignerDocument(): Promise<DIDDocument> {
        if (this.doc == null)
            this.doc = await this.did.resolve();
        else {
            if (this.doc.isCustomizedDid())
                await this.doc.resolveControllers();
        }

        return this.doc;
    }

    public static parse(content: string | JSONObject, context: any = null): DIDRequest {
        try {
            return IDChainRequest.deserialize(content, DIDRequest, context);
        } catch (e) {
            // DIDSyntaxException
            if (e instanceof Exceptions.MalformedIDChainRequestException)
                throw e;
            else
                throw new Exceptions.MalformedIDChainRequestException(e);
        }
    }
}