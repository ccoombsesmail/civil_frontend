/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import { clusterApiUrl, PublicKey, Connection } from '@solana/web3.js'
import {
  GatewayProvider, useGateway,
} from '@civic/solana-gateway-react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import {
  Container, IconContainer, StyledExpandButton, PopoverToolTip,
} from '../Style'

import Popover from '../../../pages/CommonComponents/PopoverStickOnHover/Index'
import useGetGatewayStatus from '../../hooks/useGetGatewayStatus'

require('@solana/wallet-adapter-react-ui/styles.css')

const env = {
  gatekeeperNetwork: new PublicKey('uniqobk8oGh4XBLMqM68K8M2zNu3CdYX7q5go7whQiv'),
  clusterUrl: clusterApiUrl('devnet'),
  cluster: 'devnet',
}
const RequestGatewayToken = () => {
  const [showPopover, setShowPopover] = useState(false)
  const onClick = () => setShowPopover((prev) => !prev)
  const { requestGatewayToken } = useGateway()
  const [color, statusMsg, icon] = useGetGatewayStatus()

  return (
    <Container>
      <IconContainer color={color}>
        <Popover
          trigger={['hover', 'click']}
          component={(
            <PopoverToolTip>
              <b>The Pass Proves You Are A Unique User</b>
              <br />
              <span>
                {'Status: '}
                {' '}
                <i style={{ color }}>{statusMsg}</i>
              </span>
            </PopoverToolTip>
          )}
          placement="right"
          onMouseEnter={() => {}}
          delay={200}
          showPopover={showPopover}
          setShowPopover={setShowPopover}
        >
          <img
            onClick={onClick}
            src="https://civic.me/static/media/uniqueness.c7a0f0195d44b27436f30aee36620cae.svg"
            alt=""
          />
        </Popover>

      </IconContainer>

      <b>⟶</b>
      <StyledExpandButton
        iconButton
        margin={0}
        backgroundColor={color}
        type="submit"
        icon={icon}
        onClick={requestGatewayToken}
        civicButton
      >
        {statusMsg}
      </StyledExpandButton>
    </Container>
  )
}

const UniquenessGateway = () => {
  const wallet = useWallet()
  const { publicKey } = wallet

  const { gatekeeperNetwork, cluster } = env
  const conn = useConnection()
  console.log(conn)
  // const conn = new Connection(clusterApiUrl('devnet', 'processed'))
  // conn.requestAirdrop(publicKey, 1000000000)
  if (!wallet || !publicKey || !conn) return null
  return (
    <GatewayProvider
      connection={conn}
      wallet={wallet}
      gatekeeperNetwork={gatekeeperNetwork}
      cluster={cluster}

    >
      <RequestGatewayToken />
    </GatewayProvider>
  )
}

export default UniquenessGateway
