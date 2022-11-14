import React, { useState } from 'react'
import { Tab } from 'react-bootstrap'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import {
  SignIn,
  SignUp,
} from '@clerk/clerk-react'

import { useLocation, useNavigate } from 'react-router-dom'
import {
  SignInContainer, DIDSignInContainer, CreateDidButton, DIDHeader,
  ElastosIcon, FlexDiv, Footer, IconLink,
} from './Style/index'
import { ThemeTabNew } from '../../../CommonComponents/Tabs/Style'
import { Blockchain } from '../../../../svgs/svgs'
import CivicTabContent from './components/CivicTabContent/Index'

export const SignInComponent = () => {
  const { state } = useLocation()
  const [key, setKey] = useState('civic')

  const navigate = useNavigate()
  return (
    <SignInContainer>

      <ThemeTabNew
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab
          eventKey="civic"
          title={(
            <div>
              Civic (Web 3)
              <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/assets/civic-logo-orange.png" />
            </div>
          )}
        >
          <CivicTabContent />
        </Tab>
        <Tab
          eventKey="civil"
          title={(
            <div>
              Civil-Clerk (Web 2)
              <img alt="" src="https://dashboard.clerk.dev/assets/logos/clerk.svg" />
            </div>
          )}
        >
          <SignIn
            signUpUrl="/authenticate/signup"
            afterSignInUrl={state?.redirectPath}
            appearance={{
              variables: {
                fontSize: '1.2vw',
                fontSmoothing: 'antialiased',
                fontWeight: 900,
                fontFamily: 'Source Sans Pro, sans-serif',
              },
            }}
          />
        </Tab>
        {/* <SignInContainer> */}
        <Tab
          eventKey="decentralized"
          title={(
            <div>
              Elastos (Web 3)
              <img alt="" src="https://civil-dev.s3.us-west-1.amazonaws.com/elastos_hero.png" />
              {/* <Blockchain /> */}
            </div>
          )}
        >

          <DIDSignInContainer className="cl-component cl-sign-in">
            <FlexDiv>
              <DIDHeader>
                Own Your Identity
                <IconLink href="https://www.elastos.org/" target="_blank" rel="noreferrer">
                  <ElastosIcon src="https://civil-dev.s3.us-west-1.amazonaws.com/elastos_hero.png" alt="" />
                </IconLink>
              </DIDHeader>
            </FlexDiv>
            <CreateDidButton onClick={() => navigate('new-did')}>Create Decentralized Identity</CreateDidButton>
            <CreateDidButton onClick={() => navigate('restore-did')}>Restore / Import DID</CreateDidButton>
            <Footer>
              <span>
                Passport To The SmartWeb
              </span>
            </Footer>
          </DIDSignInContainer>

        </Tab>

        {/* </SignInContainer> */}
      </ThemeTabNew>
    </SignInContainer>

  )
}

export const SignUpComponent = () => (
  <SignInContainer>
    <SignUp signInUrl="/authenticate" />
  </SignInContainer>
)

export default SignInComponent
