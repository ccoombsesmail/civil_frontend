/* eslint-disable max-len */
import React from 'react'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import {
  Container, InnerContainer, Intro, DescriptionList, DescriptionItem,
} from './Style'
import { Line } from '../../../CommonComponents/Line'
import UniquenessGateway from '../../../../civic/components/UniquenessGateway/UniquenessGateway'
import useReplaceDisconnectButtonEffect from '../../../../civic/hooks/useReplaceDisconnectButtonEffect'
import { LongDownArrow } from '../../../../svgs/svgs'

function CivicTest() {
  useReplaceDisconnectButtonEffect('civic-verify')

  return (
    <Container id="civic-verify">
      <InnerContainer>
        <Intro>
          <h2>
            Get Verified with
            {' '}
            <b>Civic</b>
          </h2>
          <DescriptionList>
            <DescriptionItem>
              <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/video-selfie.png" />
              <p>Here, you can easily prove your unique identity with a simple video selfie. Civic will quickly analyze your biometric data to determine your authenticity, and award you with a Civic Badge that can be used across the internet.</p>

            </DescriptionItem>
            <Line />
            <DescriptionItem>
              <img alt="" src="https://civic.me/static/media/uniqueness.c7a0f0195d44b27436f30aee36620cae.svg" />
              <p>Verification is an essential step for our community, as it ensures that each user is a real person and not a bot. By enforcing a 1:1 relationship between your account and your unique identity, we can prevent fraud and maintain a fair and honest environment for everyone.</p>

            </DescriptionItem>
            <Line />
            <DescriptionItem>
              <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/encrypt.png" />
              <p>The Civic verification process is quick, easy, and secure. Biometric data is encrypted, and only used for verification purposes </p>
            </DescriptionItem>
          </DescriptionList>
          <Line />
          <a target="_blank" href="https://civic.me/" rel="noreferrer">
            Click Here
          </a>
          To Learn More About Civic
        </Intro>
        <Line />

        <WalletModalProvider>
          <WalletMultiButton />
        </WalletModalProvider>
        <Line />

        <h1>Click To Begin</h1>
        <LongDownArrow />
        <UniquenessGateway />
      </InnerContainer>

    </Container>
  )
}
export default CivicTest
