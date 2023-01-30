import { useGateway } from '@civic/solana-gateway-react'
import React, { useMemo } from 'react'
import { CivilGatewayStatus } from '../../enums/CivilGatewayStatus.ts'
import { VerifiedSvg, WarningSvg } from '../../svgs/svgs'

export default () => {
  const { gatewayStatus } = useGateway()
  return useMemo(() => {
    let btnColor
    let btnIcon
    if (gatewayStatus === 9) {
      btnColor = 'var(--m-civic-theme-main-color)'
      btnIcon = <VerifiedSvg />
    } else if (gatewayStatus === 13) {
      btnIcon = <WarningSvg />
      btnColor = '#9B9B9B'
    } else {
      btnColor = '#9B9B9B'
      btnIcon = <WarningSvg />
    }
    return [btnColor, Object.values(CivilGatewayStatus)[gatewayStatus], btnIcon, gatewayStatus]
  }, [gatewayStatus])
}
