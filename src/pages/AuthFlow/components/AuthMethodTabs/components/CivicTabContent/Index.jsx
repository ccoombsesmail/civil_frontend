import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React, { useEffect } from 'react'
import {
  Blockchain, LongDownArrow, VerifiedSvg, ArrowRightSvg,
} from '../../../../../../svgs/svgs'
import { Line } from '../../../../../CommonComponents/Line'
import {
  BlockQuoteWrapper, BlockQuoteStyled, FaceScanImg, Container, TopUnorderdList, Title,
  AlreadyKnowContainer,
} from './Style'

const CivicQuote = () => (
  <>
    <h1>
      This work is grounded in our firm belief that
      {' '}
      <em style={{ color: '#2F1730' }}>identity</em>
      {' '}
      is a
      {' '}
      <em style={{ color: '#2F1730' }}>fundamental human right</em>
      {' '}
      and should be
      {' '}
      <em style={{ color: '#2F1730' }}>universally accessible.</em>
      This will not only broaden access to
      {' '}
      <em style={{ color: '#2F1730' }}>social rights</em>
      {' '}
      like voting and financial services, but will also allow more people
      {' '}
      <em style={{ color: '#2F1730' }}>to make a living</em>
      {' '}
      in this new
      {' '}
      <em style={{ color: '#2F1730' }}>web3 economy</em>
    </h1>
    <h4>
      &mdash;Civic Team
      <br />
      <em><a href="https://www.civic.com/about/#mission" target="_blank" rel="noreferrer">Our Philosophy</a></em>
    </h4>
  </>
)
const ElastosQuote = () => (
  <>
    <h1>
      DIDs Are
      {' '}
      <em style={{ color: '#2F1730' }}>Tamper-Proof, Interoperable Identification For Everyone.</em>
      {' '}
      An
      {' '}
      <em style={{ color: '#2F1730' }}>Open-Source</em>
      {' '}
      Digital Identity System Like Elastos Decentralized Identity (DID)
      allows you to
      {' '}
      <em style={{ color: '#2F1730' }}>trust code</em>
      {' '}
      and
      {' '}
      <em style={{ color: '#2F1730' }}>NOT</em>
      {' '}
      corporations with
      {' '}
      <em style={{ color: '#2F1730' }}>your data</em>
    </h1>
    <h4>
      &mdash;Elastos Team
      <br />
      <em><a href="https://www.elastos.org/en/did/" target="_blank" rel="noreferrer"> What Are DIDs </a></em>
    </h4>
  </>
)

const BlockQuote = ({ quote, themeColor }) => (
  <BlockQuoteWrapper>
    <BlockQuoteStyled themeColor={themeColor}>
      {quote}
    </BlockQuoteStyled>
  </BlockQuoteWrapper>
)

const CivicTabContent = () => {
  const { connect, wallet } = useWallet()
  useEffect(() => {
    setTimeout(() => {
      const selectWalletButtons = Array.from(document.getElementsByClassName('wallet-button'))
      selectWalletButtons?.forEach((btn) => {
        btn.addEventListener('click', () => {
          setTimeout(() => {
            const getStartedButton = document.getElementsByClassName('wallet-adapter-modal-middle-button')[0]
            getStartedButton?.addEventListener('click', () => {
              setTimeout(() => {
                console.log(document.getElementsByClassName('wallet-button')[0])
                document.getElementsByClassName('wallet-button')[0].click()
              }, 300)
            })
          }, 300)
        })
      })
    }, 500)
  }, [wallet, connect])
  return (
    <Container>
      <AlreadyKnowContainer>
        <h1>Already Know What You Are Doing?</h1>
        <ArrowRightSvg />
        <WalletMultiButton />
      </AlreadyKnowContainer>
      <Line />
      <TopUnorderdList>
        <li>
          Using A
          {' '}
          <u>Decentralized ID (DID)</u>
          {' '}
          is Preferred,
          and Will Grant You The Highest Level of Access To The Platform.
        </li>
        <li>
          Completing A Uniqueness Verification (only currently available with a Civic Profile),
          Will Grant Voting Rights and A Verified Checkmark
          {' '}
          <VerifiedSvg />
          {' '}
          Which Indicates You Are A Real Person With A Single Account
        </li>

      </TopUnorderdList>
      <LongDownArrow />
      <h1>Start Here</h1>
      <LongDownArrow />
      <Title>
        What Are Decentralized IDs (DIDs)?
      </Title>
      <BlockQuote themeColor="var(--m-elastos-theme)" quote={<ElastosQuote />} />
      <TopUnorderdList>
        <li>
          After Following The Steps To Create A Wallet, You Will Have The Choice to
          Verify Your Profile.
        </li>
        <li>
          By Completing the reCAPTCHA verification, you can obtain a stamp on your digital profile
          that proves you are not a bot.
        </li>
        <li>
          If you opt for the Uniquness Verification, a Facial Scan (in an encrypted format),
          can enforce a 1-1 relationship between a profile and a real person
          (i.e a single profile per individual).
          This is crucial for functionality such as community moderation.
        </li>

      </TopUnorderdList>

      <FaceScanImg alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/faceScanCivic.png" />
      <Line />

      <h1>Get Started By Clicking Here</h1>
      <LongDownArrow />
      <WalletMultiButton
        className="wallet-button"
        startIcon={<Blockchain />}
      />
      <Line />

      <BlockQuote themeColor="#FF6b4E" quote={<CivicQuote />} />

    </Container>

  )
}

export default CivicTabContent
