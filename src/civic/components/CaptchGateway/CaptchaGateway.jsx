/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useMemo, useState } from 'react'
import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import {
  GatewayProvider, useGateway,
} from '@civic/solana-gateway-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { Button, OverlayTrigger } from 'react-bootstrap'
import ThemeTooltip, { TooltipPopover } from '../../../pages/CommonComponents/Tooltip/Index'
import Popover from '../../../pages/CommonComponents/PopoverStickOnHover/Index'

import {
  Container, IconContainer, StyledExpandButton, PopoverToolTip,
} from './Style'
import { CivilGatewayStatus } from '../../../enums/CivilGatewayStatus.ts'
import { VerifiedSvg, VerifiedSvgCivic, WarningSvg } from '../../../svgs/svgs'

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css')

const env = {
  gatekeeperNetwork: new PublicKey('ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6'),
  clusterUrl: clusterApiUrl('devnet'),
  cluster: 'devnet'
}
const RequestGatewayToken = () => {
  const [showPopover, setShowPopover] = useState(false)
  const onClick = () => setShowPopover((prev) => !prev)
  const { gatewayStatus, requestGatewayToken, gatewayToken } = useGateway()
  const [color, statusMsg, icon] = useMemo(() => {
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
              <b>The Pass Proves You Are Not A Bot</b>
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
            src="https://civic.me/static/media/bot_icon.f8d363e6d1ab7990da7126f8fa6a67ab.svg"
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

const CaptchaGateway = () => {
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

export default CaptchaGateway
