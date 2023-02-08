/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from 'react'
import { clusterApiUrl, PublicKey, Connection } from '@solana/web3.js'
import {
  GatewayProvider, useGateway,
} from '@civic/solana-gateway-react'
import { useWallet } from '@solana/wallet-adapter-react'
import Popover from '../../../core/CommonComponents/PopoverStickOnHover/Index'

import {
  Container, IconContainer, StyledExpandButton, PopoverToolTip,
} from '../Style'
import useGetGatewayStatus from '../../hooks/useGetGatewayStatus'

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css'

const env = {
  gatekeeperNetwork: new PublicKey('ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6'),
  clusterUrl: clusterApiUrl('devnet'),
  cluster: 'devnet',
}

function StatusIcon({ placement }) {
  const [showPopover, setShowPopover] = useState(false)
  const onClick = () => setShowPopover((prev) => !prev)
  const [color, statusMsg] = useGetGatewayStatus()

  return (
    <IconContainer color={color}>
      <Popover
        trigger={['hover', 'click']}
        component={(
          <PopoverToolTip>
            <b>The Pass Proves You Are Not A Bot</b>
            <br />
            <span>
              {'Status: '}
              {' '}
              <i style={{ color }}>{statusMsg}</i>
            </span>
          </PopoverToolTip>
      )}
        placement={placement}
        onMouseEnter={() => { }}
        delay={200}
        showPopover={showPopover}
        setShowPopover={setShowPopover}
      >
        <img
          onClick={onClick}
          src="https://civic.me/static/media/bot_icon.f8d363e6d1ab7990da7126f8fa6a67ab.svg"
          alt=""
        />
      </Popover>

    </IconContainer>
  )
}

function RequestGatewayTokenDesktop() {
  const { requestGatewayToken } = useGateway()
  const [color, statusMsg, icon] = useGetGatewayStatus()
  return (
    <Container>
      <StatusIcon placement="right" />
      <b>⟶</b>
      <StyledExpandButton
        iconButton
        margin={0}
        backgroundColor={color}
        type="submit"
        icon={icon}
        onClick={requestGatewayToken}
        width="150px"
        civicButton
      >
        <span style={{ marginLeft: '10px' }}>
          {statusMsg}
        </span>

      </StyledExpandButton>
    </Container>
  )
}

// const RequestGatewayTokenMobile = () => {

//   return (
//     <Container>
//       <StatusIcon placement="bottom" />
//     </Container>
//   )
// }

export function CaptchaGatewayDesktop() {
  const wallet = useWallet()
  const { publicKey } = wallet
  const { gatekeeperNetwork, cluster } = env
  const conn = new Connection(clusterApiUrl('devnet'), 'processed')
  if (!conn || !publicKey) return null
  // conn.requestAirdrop(publicKey, 1000000000)
  return (
    <GatewayProvider
      connection={conn}
      wallet={wallet}
      gatekeeperNetwork={gatekeeperNetwork}
      cluster={cluster}
      options={{
        autoShowModal: false,
      }}
    >
      <RequestGatewayTokenDesktop />
    </GatewayProvider>
  )
}
