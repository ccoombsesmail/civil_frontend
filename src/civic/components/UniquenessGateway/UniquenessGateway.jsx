/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useMemo, useState } from 'react'
import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import {
  GatewayProvider, useGateway,
} from '@civic/solana-gateway-react'
import { useWallet } from '@solana/wallet-adapter-react'
import {
  Container, IconContainer, StyledExpandButton, PopoverToolTip,
} from './Style'

import { CivilGatewayStatus } from '../../../enums/CivilGatewayStatus.ts'
import Popover from '../../../pages/CommonComponents/PopoverStickOnHover/Index'
import { VerifiedSvg, WarningSvg } from '../../../svgs/svgs'

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css')

const env = {
  gatekeeperNetwork: new PublicKey('uniqobk8oGh4XBLMqM68K8M2zNu3CdYX7q5go7whQiv'),
  clusterUrl: clusterApiUrl('devnet'),
  cluster: 'devnet',
}
const RequestGatewayToken = () => {
  const [showPopover, setShowPopover] = useState(false)
  const onClick = () => setShowPopover((prev) => !prev)
  const { gatewayStatus, requestGatewayToken, gatewayToken } = useGateway()
  const [color, statusMsg, icon] = useMemo(() => {
    console.log('In Uniqueness Component', gatewayStatus, gatewayToken?.gatekeeperNetworkAddress)
    let btnColor
    let btnIcon
    if (gatewayStatus === 9) {
      btnColor = 'var(--m-civic-theme-main-color)'
      btnIcon = <VerifiedSvg />
    } else if (gatewayStatus === 13) {
      btnIcon = <WarningSvg />
      btnColor = '#DB3B21'
    } else btnColor = 'var(--m-civic-theme-main-color)'
    return [btnColor, Object.values(CivilGatewayStatus)[gatewayStatus], btnIcon]
  }, [gatewayStatus])

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
          onMouseEnter={() => { }}
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
        width="8vw"
        height="2.2vw"
        margin={0}
        backgroundColor={color}
        type="submit"
        icon={icon}
        onClick={requestGatewayToken}
      >
        {statusMsg}

      </StyledExpandButton>
    </Container>
  )
}

const UniquenessGateway = () => {
  const wallet = useWallet()
  const { publicKey } = wallet

  const { gatekeeperNetwork, cluster, clusterUrl } = env
  return (
    <GatewayProvider
      wallet={wallet}
      gatekeeperNetwork={gatekeeperNetwork}
      cluster={cluster}
      clusterUrl={clusterUrl}
    >
      { publicKey && <RequestGatewayToken /> }
    </GatewayProvider>
  )
}

export default UniquenessGateway
