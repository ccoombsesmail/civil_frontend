/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useMemo, useEffect } from 'react'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'
import {
  GatewayProvider, useGateway,
} from '@civic/solana-gateway-react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { findGatewayTokens } from '@identity.com/solana-gateway-ts'
import {
  Container, IconContainer, StyledExpandButton, PopoverToolTip,
} from '../Style'
import { VerifiedSvg, WarningSvg } from '../../../svgs/svgs'

import Popover from '../../../core/CommonComponents/PopoverStickOnHover/Index'
import useGetGatewayStatus from '../../hooks/useGetGatewayStatus'
import { isValid as isTokenValid } from '../../../generic/time/isCivicTokenValid.ts'
import ThemeIconTooltip, { ThemeIconTooltip2 } from '../../../core/CommonComponents/Tooltip/Index'

require('@solana/wallet-adapter-react-ui/styles.css')

function Icon() {
  return (
    <img
      src="https://civic.me/static/media/uniqueness.c7a0f0195d44b27436f30aee36620cae.svg"
      alt=""
    />
  )
}

const env = {
  gatekeeperNetwork: new PublicKey('uniqobk8oGh4XBLMqM68K8M2zNu3CdYX7q5go7whQiv'),
  clusterUrl: clusterApiUrl('devnet'),
  cluster: 'devnet',
}
function RequestGatewayToken() {
  const [showPopover, setShowPopover] = useState(false)
  const onClick = () => setShowPopover((prev) => !prev)
  const { requestGatewayToken } = useGateway()
  const [color, statusMsg, icon] = useGetGatewayStatus()

  return (
    <Container>
      <IconContainer color={color}>
        <ThemeIconTooltip
          Icon={Icon}
          tooltipText={(
            <PopoverToolTip>
              <b>ThIs Pass Proves You Are A NOT a bot</b>
              <br />
              <span>
                {'Status: '}
                {' '}
                <i style={{ color }}>{statusMsg}</i>
              </span>
            </PopoverToolTip>
            )}
          grow="true"
          targetId="unique-icon-panel"
        />
      </IconContainer>

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

export function UniquenessStatus() {
  const [showPopover, setShowPopover] = useState(false)
  const onClick = () => setShowPopover((prev) => !prev)
  const wallet = useWallet()
  const [isValid, setIsValid] = useState(false)
  const [color, statusMsg, icon] = useMemo(() => {
    let btnColor
    let btnIcon
    let msg
    if (isValid) {
      // btnColor = 'var(--m-civic-theme-main-color)'
      btnColor = 'var(--primary-color)'
      btnIcon = <VerifiedSvg />
      msg = 'Active'
    } else {
      btnColor = '#9B9B9B'
      btnIcon = <WarningSvg />
      msg = 'Not Active'
    }
    return [btnColor, msg, btnIcon]
  }, [isValid])

  const { publicKey } = wallet

  const { gatekeeperNetwork } = env
  const conn = useConnection()
  useEffect(() => {
    const getTokens = async () => {
      if (conn && publicKey) {
        const gatewayToken = await findGatewayTokens(conn.connection, publicKey, gatekeeperNetwork)
        setIsValid(isTokenValid(gatewayToken[0]))
      }
    }
    getTokens()
  }, [conn, publicKey])
  if (!publicKey || !conn) return null

  return (
    <Container>
      <IconContainer color={color}>
        <ThemeIconTooltip2
          Icon={Icon}
          tooltipText={(
            <PopoverToolTip>
              <b className="text-900">The Pass Proves You Are A Unique User</b>
              <br />
              <span className="text-900">
                {'Status: '}
                {' '}
                <i style={{ color }}>{statusMsg}</i>
              </span>
            </PopoverToolTip>
            )}
          grow="true"
          targetId="unique-icon-panel"
        />

      </IconContainer>

      <b>⟶</b>
      <StyledExpandButton
        iconButton
        margin={0}
        bgColor={color}
        type="submit"
        width="180px"
        icon={icon}
        civicButton
      >
        {statusMsg}
      </StyledExpandButton>
    </Container>
  )
}
// https://solana-mainnet.g.alchemy.com/v2/cgns7vIgz5PLpQdI7Tx4CYAzBOZ3glGs

function UniquenessGateway() {
  const wallet = useWallet()

  const { publicKey } = wallet
  const { gatekeeperNetwork, cluster } = env
  const conn = new Connection(clusterApiUrl('devnet'), 'processed')
  if (!publicKey || !conn) return null
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
