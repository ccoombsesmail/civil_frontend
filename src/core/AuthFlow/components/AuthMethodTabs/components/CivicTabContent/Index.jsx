import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

import React, { useState } from 'react'
import useReplaceDisconnectButtonEffect from '../../../../../../civic/hooks/useReplaceDisconnectButtonEffect'
import {
  LongDownArrow, ArrowRightSvg, DownArrowSvg,
} from '../../../../../../svgs/svgs'
import { Line } from '../../../../../CommonComponents/Line'
import TabContent from '../../../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index'
import TabNavItem from '../../../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index'
import { Glider, TabNav } from '../../../../../CommonComponents/NonBootstrapTabs/Style'
import {
  BlockQuoteWrapper, BlockQuoteStyled, StyledImg, Container, TopUnorderdList, Title,
  AlreadyKnowContainer,
  StyledParagraph,
} from './Style'

function CivicQuote() {
  return (
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
}
function ElastosQuote() {
  return (
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
}

function BlockQuote({ quote, themeColor }) {
  return (
    <BlockQuoteWrapper>
      <BlockQuoteStyled themeColor={themeColor}>
        {quote}
      </BlockQuoteStyled>
    </BlockQuoteWrapper>
  )
}

function CivicTabContent() {
  const [key, setKey] = useState(0)
  const isPhantomInstalled = window.phantom?.solana?.isPhantom
  const extensionInstalled = isPhantomInstalled;
  useReplaceDisconnectButtonEffect('auth-container')
  useReplaceDisconnectButtonEffect('get-started-container')
  return (
    <Container>
      <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/civic-logo-orange.png" className="w-2 h-2 my-7" />
      <AlreadyKnowContainer id="auth-container">
        <h1>Already Know What You Are Doing?</h1>
        <ArrowRightSvg />
        { extensionInstalled ? <WalletMultiButton /> :  <Button 
        className='wallet-adapter-button w-3' 
        style={{backgroundColor: '#AB9FF2'}} 
        label="Phantom" 
        icon={<img className='w-3 hidden lg:block' src='https://civil-dev.s3.us-west-1.amazonaws.com/assets/Phantom-Icon_App_60x60.png' />} 
        onClick={() => window.open("https://phantom.app/download", "_blank")}

        /> }
      </AlreadyKnowContainer>
      <Line />
      { extensionInstalled ? null : (
      <>
      <h1>You'll Need To Install An Extension (Phantom) First</h1>
      
      <Message className='h-1' severity="info" text="Please Refresh The Page After Installation" />
      <LongDownArrow />
      <div className="card flex justify-content-center w-5">
          <Button
            className='wallet-adapter-button w-5'
            style={{ backgroundColor: '#AB9FF2' }}
            label="Phantom"
            icon={<img className='w-3 hidden lg:block' src='https://civil-dev.s3.us-west-1.amazonaws.com/assets/Phantom-Icon_App_60x60.png' />}
            onClick={() => window.open("https://phantom.app/download", "_blank")} />
          {/* <Button
            className='wallet-adapter-button w-5 mx-2'
            style={{ backgroundColor: '#A12ED3' }}
            label="Glow"
            icon={<img className='w-3 hidden lg:block' src='https://glow.app/landing/app-icons/barney.png' />}
            onClick={() => window.open("https://glow.app", "_blank")} /> */}
        </div>
        <Line />
        </>
      )}

      <h1>Start Here</h1>
      <LongDownArrow />
      <Title>
        What Are Decentralized IDs (DID/SSI)
      </Title>
      <TopUnorderdList>
        <li>
          Decentralized IDs, or SSIs (Self-Soverign Identities), are a decentralized approach to identity management where users control and manage their own personal data.
        </li>
        <li>
          SSIs utilize blockchain technology to securely store identity data and provide users with a secure, tamper-proof digital identity.
        </li>
        <li>
          Enables users to store, manage, and control access to their personal data, eliminating the need for centralized intermediaries.
        </li>
        <li>
          Offers improved privacy, as users have full control over who has access to their data.
        </li>
      </TopUnorderdList>
      <Title>
        Benefits Over Exisiting Methods Of Authentication
      </Title>
      <TopUnorderdList>

        <li>
          Decentralized control: Users own their data, reducing the risk of data breaches and unauthorized access to personal information.
        </li>
        <li>
          Improved security: Blockchain technology provides a secure, tamper-proof environment for storing and managing identity data.
        </li>
        <li>
          Greater privacy: Users have control over who has access to their data, reducing the risk of data misuse or unauthorized sharing.
        </li>
        <li>
          Increased user control: Users have the ability to manage their own digital identity, including deciding which information is shared and with whom.
        </li>
        <li>
          Cross-platform interoperability: Digital identities can be easily transferred between different applications and platforms,
          providing users with more choice and flexibility.
        </li>
      </TopUnorderdList>
      <Title>
        From Corporation Centric to User Centric
      </Title>
      <StyledImg width="80%" src="https://cdn.spark.app/media/collabogatejapan/image/1_xwtf9thjeycvrlm4kz9wsa.png" alt="" />
      <Line />
      <Title>
        Getting Started
      </Title>
      <LongDownArrow />
      <h2>1. Choose From Several Account/Wallet Solutions</h2>
      <StyledParagraph>
        A crypto wallet has two main components: a public address and a private key.
        The public address is like your wallet's mailing address, and is used to receive cryptocurrencies. It can also be used as a unique username.
        <br />
        The private key is like a password, used to access and control your assets stored in the wallet.
      </StyledParagraph>
      <StyledImg src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/walletChoicePic.png" alt="" />
      <TabNav>
        <TabNavItem title="Torus" id={0} activeTab={key} setActiveTab={setKey} />
        <TabNavItem title="Phantom" id={1} activeTab={key} setActiveTab={setKey} />

        <Glider className="glider" />
      </TabNav>

      <TabContent id={0} activeTab={key}>
        <StyledParagraph color="var(--torus-theme) !important">
          <a href="https://tor.us/" target="_blank" rel="noreferrer">Torus</a>
          {' '}
          is a very user friendly option, particulary if you are not well versed with crypto wallets
        </StyledParagraph>
        <TopUnorderdList>
          <li>Use your existing social login to start (google, twitter, etc.)</li>
          <li>Learn to use wallet functionality as you go</li>
          <li>Private key consist of three components: social login, device, and one or more recovery methods (2FA, passphrase etc.)</li>

        </TopUnorderdList>

        <StyledImg width="80%" src="https://web3auth.io/docs/assets/images/tkey-flow-451ae70932d35611ca3f49908cd1cb29.png" alt="" />

      </TabContent>
      <TabContent id={1} activeTab={key}>
        <StyledParagraph color="var(--phantom-theme) !important">
          <a href="https://phantom.app/" target="_blank" rel="noreferrer" style={{ color: 'var(--phantom-theme) !important' }}>Phantom</a>
          {' '}
          is a very secure wallet which is controlled via a private key in the form of a 12 word pass phrase
        </StyledParagraph>
        <StyledImg width="80%" src="https://help.phantom.app/hc/article_attachments/12422856859667" alt="" />
        <StyledImg width="80%" src="https://help.phantom.app/hc/article_attachments/12422910728851" alt="" />

      </TabContent>
      <Line />

      <h2>2. Obtain Civic Verification Passes (Optional)</h2>

      <TopUnorderdList>
        <li>
          After following the steps to create a wallet, you will have the choice to
          verify your profile.
        </li>
        <li>
          By Completing the reCAPTCHA verification, you can obtain a stamp on your digital profile
          that proves you are not a bot.
        </li>
        <li>
          If you opt for the Uniquness Verification, a Facial Scan (in an encrypted format),
          can enforce a 1-1 relationship between a profile and a real person
          (i.e a single profile per individual).
          This is required to participate in functionality such as community moderation.
        </li>

      </TopUnorderdList>

      <StyledImg alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/faceScanCivic.png" />
      <Line />

      <h1>Get Started By Clicking Here</h1>
      <LongDownArrow />
      <div id="get-started-container">
        <WalletMultiButton />

      </div>
      <Line />

      <BlockQuote themeColor="var(--m-elastos-theme)" quote={<ElastosQuote />} />
      <BlockQuote themeColor="#FF6b4E" quote={<CivicQuote />} />

    </Container>

  )
}

export default CivicTabContent
