import { DIDBackend, DIDStore, Logger, Mnemonic, RootIdentity } from "@elastosfoundation/did-js-sdk";
import { AssistDIDAdapter } from "./AssistDIDAdapter"

const log = new Logger("RootIdentitySample");
export class RootIdentitySample {
	private static STORE_PASS = "secret";

	private store: DIDStore;
	private identity: RootIdentity;
	private mnemonic: string; // use to re-create a store

	constructor(){}

	public async openStore(): Promise<DIDStore> {
		if (this.store == null) {
			// Location to your DIDStore
			let storePath = "/tmp/RootIdentitySample.store";
			this.store = await DIDStore.open(storePath);
		}

		return this.store;
	}

	public closeStore(): void {
		if (this.store != null)
			this.store.close();
	}

	public createNewRootIdentity(): RootIdentity {
		// Create a mnemonic use default language(English).
		let mg = Mnemonic.getInstance();
		this.mnemonic = mg.generate();

		log.trace("Please write down your mnemonic:\n  " + this.mnemonic);

		// Initialize the root identity.
		this.identity = RootIdentity.createFromMnemonic(this.mnemonic, null, this.store, RootIdentitySample.STORE_PASS);
		return this.identity;
	}

	public async listRootIdentity(): Promise<void> {
		let ids = await this.store.listRootIdentities();

		for (let id of ids)
			log.trace("RootIdentity: " + id.getId());
	}

	public async createDid(): Promise<void> {
		let doc = await this.identity.newDid(RootIdentitySample.STORE_PASS);
		let did = doc.getSubject();

		log.trace("Created DID: " + did);

		await doc.publish(RootIdentitySample.STORE_PASS);
		log.trace("Published DID: " + did);
	}

	public async createDidByIndex(index: number): Promise<void> {
		let doc = await this.identity.newDid(RootIdentitySample.STORE_PASS, index);
		let did = doc.getSubject();

		log.trace("Created DID: " + did);

		await doc.publish(RootIdentitySample.STORE_PASS);
		log.trace("Published DID: " + did);
	}

	public async createAnotherStoreAndSyncRootIdentity(): Promise<void> {
		let storePath = "/tmp/RootIdentitySample_new.store";
		let newStore = await DIDStore.open(storePath);

		// Re-create the root identity with user's mnemonic.
		this.identity = RootIdentity.createFromMnemonic(this.mnemonic, null, newStore, RootIdentitySample.STORE_PASS);

		// Synchronize the existing(published) DIDs that created by this identity
		await this.identity.synchronize();
		// now the new store has the same contexts with the previous sample store

		newStore.close();
	}
}

export async function initRootIdentity() {
	DIDBackend.initialize(new AssistDIDAdapter("mainnet"));

	let sample = new RootIdentitySample();

	try {
		await sample.openStore();

		sample.createNewRootIdentity();
		// The new created root identities in the store
		await sample.listRootIdentity();

		// Create DID using next available index
		await sample.createDid();

		// Create DID with specified index
		await sample.createDidByIndex(1234);

		sample.closeStore();

		// you can do this on the other device restore same identity and store
		await sample.createAnotherStoreAndSyncRootIdentity();
	} catch (e) {
		log.error(e);
	}
}