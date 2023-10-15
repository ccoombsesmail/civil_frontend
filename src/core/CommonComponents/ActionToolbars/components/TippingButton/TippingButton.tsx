import React, { useState, useMemo, useRef } from 'react';
import { Dialog } from 'primereact/dialog'
import { InputNumber } from 'primereact/inputnumber';
import { SelectButton } from 'primereact/selectbutton';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner'

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { longUsernameDisplay } from '../../../../../generic/string/longUsernameDisplay'

import { Connection, Transaction, SystemProgram, sendAndConfirmTransaction, PublicKey, clusterApiUrl, BaseTransactionConfirmationStrategy, TransactionConfirmationStrategy, BlockheightBasedTransactionConfirmationStrategy } from '@solana/web3.js';
import { Button } from 'primereact/button';

const TippingButton = ({ receiverPublicKey }) => {
    const { publicKey, signTransaction, connected } = useWallet();
    const endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Devnet, false), [])
    const [amount, setAmount] = useState(0);
    const [visible, setVisible] = useState(false)
    const toast = useRef(null)

    const handleTip = async () => {
        if (!connected || !receiverPublicKey) return;
        const connection = new Connection(endpoint);
        const recentBlockhash = (await connection.getLatestBlockhash());

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(receiverPublicKey),
                lamports: amount * 10 ** 9 // Convert SOL to lamports
            })
        );

        transaction.feePayer = publicKey;
        transaction.recentBlockhash = recentBlockhash.blockhash;

        const signedTransaction: Transaction = await signTransaction(transaction);
        // Request the sender to sign the transaction, returns a Transaction object

        // Send a transaction that has already been signed and serialized into the wire format
        const signature: string = await connection.sendRawTransaction(signedTransaction.serialize());
        
        const strategy: BlockheightBasedTransactionConfirmationStrategy = {
            signature,
            blockhash: recentBlockhash.blockhash,
            lastValidBlockHeight: recentBlockhash.lastValidBlockHeight
        }
        toast.current.show({
            severity: 'info',
            closable: true,
            sticky: true,
            content: (
              <div className="flex align-items-center" style={{ flex: '1' }}>
                <div className="flex align-items-center">
                  <ProgressSpinner />
                </div>
                <div className="flex gap-2">
                  Sending Tip...
                </div>
              </div>
            ),
          })
        setVisible(false);
        await connection.confirmTransaction(strategy)
        
        toast.current.clear()
    };

    const items = [
        { name: '0.05', value: 0.05 },
        { name: '0.1', value: 0.1 },
        { name: '0.2', value: 0.2 },
        { name: '0.3', value: 0.3 }

    ];

    return (
        <div>
            <Toast ref={toast} />

            <Button rounded text icon={<img src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/coins.png" alt="tip" />}
                onClick={(e) => {
                    e.stopPropagation()
                    setVisible(true)
                }} />
            <Dialog
                className='w-full md:w-6 xl:w-4'
                header={`Send A Tip To ${longUsernameDisplay(receiverPublicKey)}`}
                visible={visible}
                onHide={() => setVisible(false)}
                onClick={(e) => {
                    e.stopPropagation()
                }}
                footer={
                    <Button onClick={handleTip}>Send Tip</Button>
                }
            >
                <div className='my-4 flex flex-column'>
                    <InputNumber value={amount} onValueChange={(e) => setAmount(e.value)} showButtons buttonLayout="horizontal" step={0.01} suffix=" SOL" />
                    <div className='font-bold mt-3 w-full flex align-items-center justify-content-between'>
                        <span className='mr-3'>Popular (SOL)</span>
                        <SelectButton value={amount} onChange={(e) => setAmount(e.value)} optionLabel="name" options={items} />

                    </div>

                </div>
            </Dialog>

        </div>
    );
};

export default TippingButton;