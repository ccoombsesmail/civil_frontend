/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useEffect } from 'react'
import { clusterApiUrl, PublicKey, Connection } from '@solana/web3.js'
import {
  GatewayProvider, useGateway,
} from '@civic/solana-gateway-react'
import { useWallet } from '@solana/wallet-adapter-react'

import {
  Container, IconContainer, StyledExpandButton, PopoverToolTip,
} from '../Style'
import useGetGatewayStatus from '../../hooks/useGetGatewayStatus'

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css'
import { ThemeIconTooltip2 } from '../../../core/CommonComponents/Tooltip/Index'

function Icon() {
  return (
    <img
      src="https://civic.me/static/media/bot_icon.f8d363e6d1ab7990da7126f8fa6a67ab.svg"
      alt=""
    />
  )
}

const env = {
  gatekeeperNetwork: new PublicKey('ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6'),
  clusterUrl: clusterApiUrl('devnet'),
  cluster: 'devnet',
}

function StatusIcon() {
  const [color, statusMsg] = useGetGatewayStatus()

  return (
    <IconContainer color={color}>
      <ThemeIconTooltip2
        Icon={Icon}
        tooltipText={(
          <PopoverToolTip>
            <b className="text-900">This Pass Proves You Are A NOT a bot</b>
            <br />
            <span className="text-900">
              {'Status: '}
              {' '}
              <i style={{ color }}>{statusMsg}</i>
            </span>
          </PopoverToolTip>
            )}
        grow="true"
        targetId="captcha-icon-panel"
      />

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
        bgColor={color}
        type="submit"
        icon={icon}
        onClick={requestGatewayToken}
        width="180px"
        civicButton
      >
        {statusMsg}
      </StyledExpandButton>
    </Container>
  )
}

export function CaptchaGatewayDesktop() {
  const wallet = useWallet()

  const { publicKey } = wallet
  const { gatekeeperNetwork, cluster } = env
  const conn = new Connection(clusterApiUrl('devnet'), 'processed')
  useEffect(() => {
    const getBalance = async () => {
      if (conn && publicKey) {
        const bal = await conn.getBalance(publicKey)
        if (0.000000001 * bal < 0.5) {
          conn.requestAirdrop(publicKey, 1000000000)
        }
      }
    }
    getBalance()
  }, [conn, publicKey])
  if (!conn || !publicKey) return null
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
