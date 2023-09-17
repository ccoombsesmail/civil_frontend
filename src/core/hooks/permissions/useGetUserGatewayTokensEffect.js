import { useEffect, useState } from 'react'

import {
  findGatewayToken,
} from '@identity.com/solana-gateway-ts'
import { clusterApiUrl, PublicKey, Connection } from '@solana/web3.js'

const captchaNetworkKey = new PublicKey('ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6')
const uniquenessNetworkKey = new PublicKey('uniqobk8oGh4XBLMqM68K8M2zNu3CdYX7q5go7whQiv')

export default (userId) => {
  const [passes, setPasses] = useState({
    CAPTCHA_PASS_ACTIVE: false,
    UNQIUENESS_PASS_ACTIVE: false,

  })
  const connection = new Connection(clusterApiUrl('devnet'), 'processed')

  useEffect(() => {
    const getGatwayTokens = async () => {
      console.log(userId)
      const gatewayTokenCaptcha = await findGatewayToken(connection, new PublicKey(userId), captchaNetworkKey)
      const gatewayTokenUniqueness = await findGatewayToken(connection, new PublicKey(userId), uniquenessNetworkKey)

      setPasses({
        CAPTCHA_PASS_ACTIVE: gatewayTokenCaptcha.state === 'ACTIVE',
        UNQIUENESS_PASS_ACTIVE: gatewayTokenUniqueness.state === 'ACTIVE',

      })
    }

    if (userId) {
      getGatwayTokens()
    }
  }, [userId])

  return passes
}
